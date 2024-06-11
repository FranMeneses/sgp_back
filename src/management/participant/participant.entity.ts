import { Entity, Column, OneToMany, PrimaryGeneratedColumn, ManyToMany, JoinTable} from "typeorm";
import { Comment} from "../comment/comment.entity";
import { Meeting } from "../meeting/meeting.entity";

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

    @OneToMany(() => Comment, comment => comment.participant)
    comments: Comment[];

    @ManyToMany(() => Meeting, meeting => meeting.participants)
    @JoinTable()
    meetings: Meeting[];
}