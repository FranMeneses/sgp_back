import { Project } from "src/management/project/project.entity";
import { Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Conversation {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Project, project => project.id, { eager: true })
    id_project: Project; 
}