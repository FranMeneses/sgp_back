import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from 'typeorm';
import { Project } from '../project/project.entity';
import { Participant } from '../participant/participant.entity';

Entity()
export class Meeting {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    date: Date;

    @ManyToOne(() => Project, project => project.meetings)
    project: Project;

    @ManyToMany(() => Participant, participant => participant.meetings)
    participants: Participant[];
}
