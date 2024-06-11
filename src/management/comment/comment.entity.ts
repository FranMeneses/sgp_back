import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Participant } from '../participant/participant.entity';
import { Project } from '../project/project.entity';
import { Task } from '../task/task.entity';

Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column()
    date: Date;

    @ManyToOne(() => Participant, participant => participant.comments)
    participant: Participant;

    @ManyToOne(() => Project, project => project.comments)
    project: Project;

    @ManyToOne(() => Task, task => task.comments)
    task: Task;
}