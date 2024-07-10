import { ObjectType, Field, ID } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { Task } from "src/management/task/task.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Notification {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    @Field(() => String)
    content: string;

    @Column()
    @Field(() => Date)
    date: Date;

    @OneToOne(() => Task, task => task.notification)
    @IsOptional()
    @Field(() => Task, { nullable: true })
    task: Task;
}