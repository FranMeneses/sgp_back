import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Participant } from '../participant/participant.entity';
import { Project } from '../project/project.entity';
import { Task } from '../task/task.entity';

@Entity()
@ObjectType()
export class Comment {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    @Field()
    content: string;

    @Column()
    @Field()
    date: Date;

    @ManyToOne(() => Participant, participant => participant.comments)
    @Field(() => Participant)
    participant: Participant;

    @ManyToOne(() => Project, project => project.comments)
    @Field(() => Project)
    project: Project;

    @ManyToOne(() => Task, task => task.comments)
    @Field(() => Task)
    task: Task;
}