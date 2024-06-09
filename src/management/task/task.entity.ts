import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Project } from '../project/project.entity';

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
}
