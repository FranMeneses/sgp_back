import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Task } from 'src/management/task/task.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class StatusChanged {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    @Field()
    date: Date;

    @Column()
    @Field()
    previous_status: string;

    @Column()
    @Field()
    actual_status: string;

    @OneToOne(() => Task, task => task.statusChanged)
    @Field(() => Task, { nullable: true })
    task: Task;
}