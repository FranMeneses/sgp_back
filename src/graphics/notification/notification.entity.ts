import { ObjectType, Field, ID } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { Task } from "src/management/task/task.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    @Field(() => Number)
    taskId: number;

    @OneToOne(() => Task)
    @IsOptional()
    @JoinColumn({ name: 'taskId' })
    @Field(() => Task, { nullable: true })
    task: Task;
}