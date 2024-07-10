import { Participant } from "src/management/participant/participant.entity";
import { Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Conversation } from "./conversation.entity";
import { Field, ID, ObjectType } from "@nestjs/graphql";

@Entity()
@ObjectType()
export class ParticipantConversation {

    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @OneToOne(() => Participant, participant => participant.id, { eager: true })
    @Field(() => Participant)
    id_participant: Participant;

    @OneToOne(() => Conversation, conversation => conversation.id, { eager: true })
    @Field(() => Conversation)
    id_conversation: Conversation;
}