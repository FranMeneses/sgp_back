import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Project } from '../project/project.entity';
import { IsOptional } from 'class-validator';

@Entity()
@ObjectType()
export class Resource {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    @Field()
    category: string;

    @Column()
    @Field()
    content: string;

    @ManyToOne(() => Project, project => project.resources)
    @IsOptional()
    @Field(() => Project, { nullable: true })
    project: Project;
}