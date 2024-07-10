import { Participant } from "src/management/participant/participant.entity";
import { Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Conversation } from "./conversation.entity";
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@Entity()
@ObjectType()
export class ParticipantConversation {

    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @OneToOne(() => Participant, participant => participant.id, { eager: true })
    @IsOptional()
    @Field(() => Participant, { nullable: true })
    id_participant: Participant;

    @OneToOne(() => Conversation, conversation => conversation.id, { eager: true })
    @IsOptional()
    @Field(() => Conversation, { nullable: true })
    id_conversation: Conversation;
}