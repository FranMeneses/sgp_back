import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Task } from "src/management/task/task.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Notification {
    @PrimaryGeneratedColumn()
    @Field(() => ID) // Exponer el ID como un campo GraphQL
    id: number;

    @Column()
    @Field() // Exponer content como un campo GraphQL
    content: string;

    @Column()
    @Field() // Exponer date como un campo GraphQL
    date: Date;

    @OneToOne(() => Task, task => task.notification)
    @Field(() => Task, { nullable: true }) // Exponer task como un campo GraphQL, nullable ya que es una relación OneToOne
    task: Task;
}