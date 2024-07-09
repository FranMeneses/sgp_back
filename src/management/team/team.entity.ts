import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from 'typeorm';
import { Project } from '../project/project.entity';
import { TeamParticipant } from '../team-participant/team-participant.entity';

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    description: string;

    @ManyToOne(() => Project, project => project.teams)
    project: Project;

    @OneToOne(() => TeamParticipant, teamParticipant => teamParticipant.id, { eager: true })
    teamParticipant: TeamParticipant;
}