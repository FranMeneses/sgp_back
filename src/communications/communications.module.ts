import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatGateway } from './communications.gateway';
import { CommunicationsService } from './communications.service';
import { Message } from './message.entity';
import { Conversation } from './conversation.entity';
import { ParticipantConversation } from './participant_conversation.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Message]),TypeOrmModule.forFeature([Conversation]), TypeOrmModule.forFeature([ParticipantConversation])],
    controllers:[],
    providers:[ChatGateway, CommunicationsService]
})
export class CommunicationsModule {}
