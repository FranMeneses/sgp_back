import { SubscribeMessage, WebSocketGateway, OnGatewayInit, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './message.entity';
import { CommunicationsService } from './communications.service';
import { ParticipantService } from 'src/management/participant/participant.service';
import { ParticipantMSG } from 'src/constants';
import { ProjectService } from 'src/management/project/project.service';
import { Repository } from 'typeorm';
import { Conversation } from './conversation.entity';
import { ParticipantConversation } from './participant_conversation.entity';

@WebSocketGateway({cors: true})
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() server: Server;

  constructor(
    @InjectRepository(Message)
    private messageRepository:Repository<Message>,
    @InjectRepository(Conversation)
    private ConversationRepository:Repository<Conversation>,
    @InjectRepository(ParticipantConversation)
    private ParticipantConversationRepository:Repository<ParticipantConversation>,
    private readonly communicationsService: CommunicationsService,
    private readonly participantService: ParticipantService,
  ) {}

  @SubscribeMessage('chatToServer')
  async handleMessage(client: Socket, message: { sender: number, room: number, message: string }) {
    client.join(String(message.room));
    this.server.to(String(message.room)).emit('chatToClient', message);
    
    const participant_conversation = await this.participantService.findOne(ParticipantMSG.FIND_ONE, message.sender);
    if (!participant_conversation) {
      throw new Error('Participant conversation not found');
    }

    const conversation = await this.communicationsService.findconversationByProjects(message.room);
    if(!conversation){
      const newConversation = await this.communicationsService.createConversation({id_project:message.room});

      const newParticipantConversation = await this.communicationsService.createParticipantConversation({id_conversation:newConversation.id, id_participant:participant_conversation.id});

      const newMessage = await this.communicationsService.createMessage({id_participant:newParticipantConversation.id, id_conversation:newConversation.id,content:message.message,date:new Date()})

      this.messageRepository.save(newMessage);
    }

    
    const newParticipantConversation = await this.communicationsService.createParticipantConversation({id_conversation:conversation.id, id_participant:participant_conversation.id});

    const newMessage = await this.communicationsService.createMessage({id_participant:newParticipantConversation.id, id_conversation:conversation.id,content:message.message,date:new Date()})

    this.messageRepository.save(newMessage);
  }

  afterInit(server: Server) {
    console.log('Initialized!');
  }

  async handleConnection(client: Socket, ...args: any[]) {
    console.log(`Client connected: ${client.id}`);
    const roomId = args[0];
    if (roomId) {
      const messages = await this.communicationsService.findMessagesByConversation(roomId);
      client.emit('loadMessages', messages);
    }
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }
}