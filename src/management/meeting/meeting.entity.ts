import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Project } from '../project/project.entity';
import { Participant } from '../participant/participant.entity';
import { IsOptional } from 'class-validator';

@Entity()
@ObjectType()
export class Meeting {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    description: string;

    @Column()
    @Field()
    date: Date;

    @ManyToOne(() => Project, project => project.meetings)
    @IsOptional()
    @Field(() => Project, { nullable: true })
    project: Project;
}