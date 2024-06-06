import { SubscribeMessage, WebSocketGateway, OnGatewayInit, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entity/message.entity';
import { Repository } from 'typeorm';

@WebSocketGateway({cors: true})
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() server: Server;

  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
  ) {}

  @SubscribeMessage('chatToServer')
  async handleMessage(client: Socket, message: { sender: string, room: string, message: string }): Promise<void> {
    client.join(message.room);
    this.server.to(message.room).emit('chatToClient', message);

    const newMessage = this.messageRepository.create({id_conversation: message.room, id_participant: message.sender, content: message.message, date: new Date()});
    await this.messageRepository.save(newMessage);
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