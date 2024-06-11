import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Project } from '../project/project.entity';
import { Comment } from '../comment/comment.entity';
import { Status } from 'src/management/status/entities/status.entity';
import { Notificacion } from '../notificacion/entities/notificacion.entity';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @OneToOne(() => Status, status => status.task)
    @JoinColumn()
    status: Status;

    @Column()
    start_date: Date;

    @Column()
    end_date: Date;

    @ManyToOne(() => Project, project => project.tasks)
    project: Project;

    @OneToMany(() => Comment, comment => comment.task)
    comments: Comment[];

    /*
    @ManyToOne(() => Notificacion, notificacion => notificacion.tasks)
    notificacion: Notificacion;
    */
}
