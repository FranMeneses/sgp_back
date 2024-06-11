import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Team } from '../team/team.entity';
import { Task } from '../task/task.entity';
import { Resource } from '../resource/resource.entity';
import { Comment } from '../comment/comment.entity';
import { Meeting } from '../meeting/meeting.entity';
import { Archive } from '../archive/entities/archive.entity';

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    amount_participants: number;

    @Column()
    start_date: Date;

    @Column()
    end_date: Date;

    @OneToMany(() => Team, team => team.project)
    teams: Team[];

    @OneToMany(() => Task, task => task.project)
    tasks: Task[];

    @OneToMany(() => Resource, resource => resource.project)
    resources: Resource[];

    @OneToMany(() => Comment, comment => comment.project)
    comments: Comment[];

    @OneToMany(() => Meeting, meeting => meeting.project)
    meetings: Meeting[];

    @OneToMany(() => Archive, archive => archive.project)
    archive: Archive[];
}
