import { Participant } from 'src/management/participant/participant.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToOne, JoinColumn } from 'typeorm';
import { Conversation } from './conversation.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@Entity()
@ObjectType()
export class Message {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field(() => Number)
  conversationId: number;

  @OneToOne(() => Conversation)
  @IsOptional()
  @JoinColumn({ name: 'conversationId' })
  @Field(() => Conversation, { nullable: true })
  conversation: Conversation;

  @Column()
  @Field(() => Number)
  participantId: number;

  @OneToOne(() => Participant)
  @IsOptional()
  @JoinColumn({ name: 'participantId' })
  @Field(() => Participant, { nullable: true })
  participant: Participant;

  @Column()
  @Field(() => String)
  content: string;

  @Column()
  @Field(() => Date)
  date: Date;
}