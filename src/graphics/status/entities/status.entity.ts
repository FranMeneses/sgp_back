import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  Column,
} from 'typeorm';
import { Participant } from '../../participant/entities/participant.entity';
import { Task } from '../../task/task.entity';

@Entity()
export class Status {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  previous_state: Date;

  @Column()
  actual_state: Date;

  @OneToOne(() => Participant, (participant) => participant.id)
  @JoinColumn({ name: 'id_participant' })
  participant: Participant;

  @OneToOne(() => Task, (task) => task.id)
  @JoinColumn({ name: 'id_task' })
  task: Task;
}
