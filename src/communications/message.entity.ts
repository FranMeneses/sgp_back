import { Participant } from 'src/management/participant/participant.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToOne } from 'typeorm';
import { Conversation } from './conversation.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Message {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @OneToOne(() => Conversation, conversation => conversation.id, { eager: true })
  @Field(() => Conversation)
  id_conversation: Conversation;

  @ManyToMany(() => Participant, participant => participant.id, { eager: true })
  @Field(() => [Participant])
  id_participant: Participant[];

  @Column()
  @Field(() => String)
  content: string;

  @Column()
  @Field(() => Date)
  date: Date;
}