import { SubscribeMessage, WebSocketGateway, OnGatewayInit, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({cors: true})
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() server: Server;

  @SubscribeMessage('chatToServer')
  handleMessage(client: Socket, message: { sender: string, room: string, message: string }): void {
    client.join(message.room);
    this.server.to(message.room).emit('chatToClient', message);
    console.log(message);
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