import { SubscribeMessage, WebSocketGateway, OnGatewayInit, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './message.entity';
import { CommunicationsService } from './communications.service';
import { ParticipantService } from 'src/management/participant/participant.service';
import { ParticipantMSG, ProjectMSG } from 'src/constants';
import { ProjectService } from 'src/management/project/project.service';

@WebSocketGateway({cors: true})
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() server: Server;

  constructor(
    @InjectRepository(Message)
    private readonly communicationsService: CommunicationsService,
    private readonly participantService: ParticipantService,
    private readonly projectService: ProjectService
  ) {}

  @SubscribeMessage('chatToServer')
  async handleMessage(client: Socket, message: { sender: number, room: string, message: string }) {
    client.join(message.room);
    this.server.to(message.room).emit('chatToClient', message);
    
    const participant_conversation = this.participantService.findOne(ParticipantMSG.FIND_ONE, message.sender);
    if (!participant_conversation) {
      throw new Error('Participant conversation not found');
    }

  }

  afterInit(server: Server) {
    console.log('Initialized!');
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }
}