import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Project } from '../project/project.entity';

@Entity()
export class Resource {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    category: string;

    @Column()
    content: string;

    @ManyToOne(() => Project, project => project.resources)
    project: Project;
}