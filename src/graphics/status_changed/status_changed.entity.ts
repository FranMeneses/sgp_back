import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';
import { Task } from 'src/management/task/task.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@Entity()
@ObjectType()
export class StatusChanged {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    @Field(() => Date)
    date: Date;

    @Column()
    @Field(() => String)
    previous_status: string;

    @Column()
    @Field(() => String)
    actual_status: string;

    @Column()
    @Field(() => Number)
    taskId: Number;

    @OneToOne(() => Task)
    @IsOptional()
    @JoinColumn({ name: 'taskId' })
    @Field(() => Task, { nullable: true })
    task: Task;
}