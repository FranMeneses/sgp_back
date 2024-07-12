import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Participant } from '../participant/participant.entity';
import { Project } from '../project/project.entity';
import { Task } from '../task/task.entity';
import { IsOptional } from 'class-validator';

@Entity()
@ObjectType()
export class Comment {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    @Field(() => String)
    content: string;

    @Column()
    @Field(() => Date)
    date: Date;

    @Column()
    @Field(() => Number)
    participantId: number;

    @ManyToOne(() => Participant)
    @IsOptional()
    @JoinColumn({ name: 'participantId' })
    @Field(() => Participant,{ nullable: true })
    participant: Participant;

    @Column()
    @Field(() => Number)
    projectId: number;

    @ManyToOne(() => Project)
    @IsOptional()
    @JoinColumn({ name: 'projectId' })
    @Field(() => Project, { nullable: true })
    project: Project;

    @Column()
    @Field(() => Number)
    taskId: number;

    @ManyToOne(() => Task, task => task)
    @IsOptional()
    @JoinColumn({ name: 'taskId' })
    @Field(() => Task, { nullable: true })
    task: Task;
}