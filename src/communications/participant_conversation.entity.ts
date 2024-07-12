import { Participant } from "src/management/participant/participant.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Conversation } from "./conversation.entity";
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@Entity()
@ObjectType()
export class ParticipantConversation {

    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    @Field(() => Number)
    participantId: number;

    @OneToOne(() => Participant)
    @IsOptional()
    @JoinColumn({ name: 'participantId' })
    @Field(() => Participant, { nullable: true })
    participant: Participant;

    @Column()
    @Field(() => Number)
    conversationId: number;

    @OneToOne(() => Conversation)
    @IsOptional()
    @JoinColumn({ name: 'conversationId' })
    @Field(() => Conversation, { nullable: true })
    conversation: Conversation;
}