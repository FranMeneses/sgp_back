import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Project } from '../project/project.entity';
import { TeamParticipant } from '../team-participant/team-participant.entity';

@Entity()
@ObjectType()
export class Team {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    type: string;

    @Column()
    @Field()
    description: string;

    @ManyToOne(() => Project, project => project.teams)
    @Field(() => Project)
    project: Project;

    @OneToOne(() => TeamParticipant, teamParticipant => teamParticipant.id, { eager: true })
    @JoinColumn() // This decorator specifies the column that joins the two entities.
    @Field(() => TeamParticipant)
    teamParticipant: TeamParticipant;
}