import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './message.entity';
import { Repository } from 'typeorm';
import { Conversation } from './conversation.entity';
import { ParticipantConversation } from './participant_conversation.entity';
import { ProjectService } from 'src/management/project/project.service';
import { ParticipantMSG, ProjectMSG } from 'src/constants';
import { CreateMessageDto } from './create_message.dto';
import { CreateConversationDto } from './create_conversation.dto';
import { ParticipantService } from 'src/management/participant/participant.service';
import { CreateParticipantConversationDto } from './create_participantconversation.dto';

@Injectable()
export class CommunicationsService {
    constructor(
        @InjectRepository(Message)
        private messageRepository: Repository<Message>,
        @InjectRepository(Conversation)
        private conversationRepository: Repository<Conversation>,
        @InjectRepository(ParticipantConversation)
        private participantConversationRepository: Repository<ParticipantConversation>,
        private readonly projectRepository: ProjectService,
        private readonly participantRepository: ParticipantService
    ) {}

    async createMessage(message: CreateMessageDto): Promise<Message> {
        try {
            const conversation = await this.conversationRepository.findOne({ where: { id: message.id_conversation } });
            if (!conversation) {
                throw new Error('Conversation not found');
            }

            const participantConversation  = await this.participantConversationRepository.find({ where: { id: message.id_participant } });
            if (!participantConversation) {
                throw new Error('Participant conversation not found');
            }

            const newMessage = this.messageRepository.create({id_conversation: conversation, id_participant: participantConversation, content: message.content, date: new Date()});

            return await this.messageRepository.save(newMessage);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async createConversation(conversation: CreateConversationDto): Promise<Conversation> {
        try {
            
            const project = await this.projectRepository.findOne(ProjectMSG.FIND_ONE, conversation.id_project);
            if (!project) {
                throw new Error('Project not found');
            }

            const newConversation = this.conversationRepository.create({id_project: project});
            return await this.conversationRepository.save(newConversation);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async createParticipantConversation(participantConversation: CreateParticipantConversationDto): Promise<ParticipantConversation> {
        try {

            const conversation = await this.conversationRepository.findOne({ where: { id: participantConversation.id_conversation } });
            if (!conversation) {
                throw new Error('Conversation not found');
            }

            const participant = await this.participantRepository.findOne(ParticipantMSG.FIND_ONE, participantConversation.id_participant);
            if (!participant) {
                throw new Error('Participant not found');
            }

            const newParticipantConversation = this.participantConversationRepository.create({id_conversation: conversation, id_participant: participant});

            return await this.participantConversationRepository.save(newParticipantConversation);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    // async findMessagesByConversation(id_conversation: number): Promise<Message[]> {
    //     return await this.messageRepository.find({ where: { id_conversation } });
    // }
    
    // async conversationsByProjects(id_project: number): Promise<Conversation[]> {
    //     return await this.conversationRepository.find({ where: { id_project } });
    // }
}