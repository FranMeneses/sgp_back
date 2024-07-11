import { Field, ID, ObjectType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { Project } from "src/management/project/project.entity";
import { Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
@ObjectType()
export class Conversation {

    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @OneToOne(() => Project, project => project.id)
    @IsOptional()
    @Field(() => Project, { nullable: true })
    id_project: Project; 
}