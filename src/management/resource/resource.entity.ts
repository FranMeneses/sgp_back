import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Project } from '../project/project.entity';
import { IsOptional } from 'class-validator';

@Entity()
@ObjectType()
export class Resource {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    @Field(() => String)
    title: string;

    @Column()
    @Field(() => String)
    category: string;

    @Column()
    @Field(() => String)
    content: string;

    @Column()
    @Field(() => Number)
    projectId: number;

    @ManyToOne(() => Project)
    @IsOptional()
    @JoinColumn({ name: 'projectId' })
    @Field(() => Project, { nullable: true })
    project: Project;
}