import { Entity, Column, OneToMany, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToOne} from "typeorm";
import { Comment} from "../comment/comment.entity";
import { Meeting } from "../meeting/meeting.entity";
import { TeamParticipant } from "../team-participant/team-participant.entity";

@Entity()
export class Participant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    last_name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    rut: string;

    @OneToOne(() => TeamParticipant, teamParticipant => teamParticipant.id, { eager: true })
    teamParticipant: TeamParticipant;

    @OneToMany(() => Comment, comment => comment.participant)
    comments: Comment[];

    @ManyToMany(() => Meeting, meeting => meeting.participants)
    @JoinTable()
    meetings: Meeting[];
}