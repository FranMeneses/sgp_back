import { Column, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Team } from "../team/team.entity";
import { Participant } from "../participant/participant.entity";
import { Task } from "../task/task.entity";

export class TeamParticipant {
    @PrimaryGeneratedColumn()
    id: number;
    
    @OneToOne(() => Participant, participant => participant.id, { eager: true })
    id_participant: Participant;
    
    @OneToMany(() => Task, task => task.id)
    tasks: Task[];

    @OneToOne(() => Team, team => team.id, { eager: true })
    id_team: Team;

    @Column()
    role: string;
}
