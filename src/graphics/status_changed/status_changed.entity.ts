import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
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

    @OneToOne(() => Task, task => task.statusChanged)
    @IsOptional()
    @Field(() => Task, { nullable: true })
    task: Task;
}