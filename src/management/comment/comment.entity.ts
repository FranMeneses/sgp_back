import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
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
    @Field()
    content: string;

    @Column()
    @Field()
    date: Date;

    @ManyToOne(() => Participant, participant => participant.comments)
    @IsOptional()
    @Field(() => Participant,{ nullable: true })
    participant: Participant;

    @ManyToOne(() => Project, project => project.comments)
    @IsOptional()
    @Field(() => Project, { nullable: true })
    project: Project;

    @ManyToOne(() => Task, task => task.comments)
    @IsOptional()
    @Field(() => Task, { nullable: true })
    task: Task;
}