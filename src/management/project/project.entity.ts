import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Project {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    @Field(() => String)
    name: string;

    @Column()
    @Field(() => String)
    description: string;

    @Column()
    @Field(() => Number)
    amount_participants: number;

    @Column()
    @Field(() => Date)
    start_date: Date;

    @Column()
    @Field(() => Date)
    end_date: Date;
}