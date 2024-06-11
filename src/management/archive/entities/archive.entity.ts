import { Project } from "src/management/project/project.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Archive {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    date:Date;

    @Column()
    type:string;

    @ManyToOne(() => Project, project => project.tasks)
    project: Project;
}
