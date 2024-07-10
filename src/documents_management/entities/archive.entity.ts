import { Field, ID, ObjectType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { Project } from "src/management/project/project.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Archive {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id:number;

    @Column()
    @Field(() => String)
    name:string;

    @Column()
    @Field(() => Date)
    date:Date;

    @Column()
    @Field(() => String)
    type:string;

    @ManyToOne(() => Project, project => project.tasks)
    @IsOptional()
    @Field(() => Project, { nullable: true })
    project: Project;
}
