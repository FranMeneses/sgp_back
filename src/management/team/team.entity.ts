import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Project } from '../project/project.entity';
import { IsOptional } from 'class-validator';

@Entity()
@ObjectType()
export class Team {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    @Field(() => String)
    name: string;

    @Column()
    @Field(() => String)
    type: string;

    @Column()
    @Field(() => String)
    description: string;

    @Column()
    @Field(() => Number, { nullable: true })
    projectId: number;

    @ManyToOne(() => Project)
    @IsOptional()
    @JoinColumn({ name: 'projectId' })
    @Field(() => Project, { nullable: true })
    project: Project;
}