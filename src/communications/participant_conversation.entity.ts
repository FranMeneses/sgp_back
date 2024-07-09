import { Participant } from "src/management/participant/participant.entity";
import { Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Conversation } from "./conversation.entity";

@Entity()
export class ParticipantConversation {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Participant, participant => participant.id, { eager: true })
    id_participant: Participant;

    @OneToOne(() => Conversation, conversation => conversation.id, { eager: true })
    id_conversation: Conversation;
}