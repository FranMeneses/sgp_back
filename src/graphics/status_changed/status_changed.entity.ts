import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Task } from 'src/management/task/task.entity';

@Entity()
export class StatusChanged {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    previous_status: string;

    @Column()
    actual_status: string;

    @OneToOne(() => Task, task => task.statusChanged)
    task: Task[];
}