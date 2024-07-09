import { Participant } from 'src/management/participant/participant.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToOne } from 'typeorm';
import { Conversation } from './conversation.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Conversation, conversation => conversation.id, { eager: true })
  id_conversation: Conversation;

  @ManyToMany(() => Participant, participant => participant.id, { eager: true })
  id_participant: Participant[];

  @Column()
  content: string;

  @Column()
  date: Date;
}