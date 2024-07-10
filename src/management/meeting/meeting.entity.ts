import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Project } from '../project/project.entity';
import { Participant } from '../participant/participant.entity';

@Entity()
@ObjectType()
export class Meeting {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    description: string;

    @Column()
    @Field()
    date: Date;

    @ManyToOne(() => Project, project => project.meetings)
    @Field(() => Project)
    project: Project;

    @ManyToMany(() => Participant, participant => participant.meetings)
    @JoinTable() // This decorator is needed for ManyToMany relations to specify the join table.
    @Field(() => [Participant])
    participants: Participant[];
}