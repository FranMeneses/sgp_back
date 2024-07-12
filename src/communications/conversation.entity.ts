import { Field, ID, ObjectType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { Project } from "src/management/project/project.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
@ObjectType()
export class Conversation {

    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    @Field(() => Number)
    projectId: number;

    @OneToOne(() => Project)
    @IsOptional()
    @JoinColumn({ name: 'projectId' })
    @Field(() => Project, { nullable: true })
    project: Project; 
}