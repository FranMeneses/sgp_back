import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_conversation: string;

  @Column()
  id_participant: string;

  @Column()
  content: string;

  @Column()
  date: Date;
}