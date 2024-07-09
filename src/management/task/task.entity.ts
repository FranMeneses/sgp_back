import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Project } from '../project/project.entity';
import { Comment } from '../comment/comment.entity';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    status: string;

    @Column()
    start_date: Date;

    @Column()
    end_date: Date;

    @ManyToOne(() => Project, project => project.tasks)
    project: Project;

    @OneToMany(() => Comment, comment => comment.task)
    comments: Comment[];
}
