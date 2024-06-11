import { MeetingEntity } from "src/management/meeting/meeting.entity";
import { Task } from "src/management/task/task.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Notificacion {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    content: string;

    @Column()
    date: Date;

    @OneToMany(() => Task, task => task.notificacion)
    tasks: Task[];

    @ManyToOne(() => MeetingEntity, meeting => meeting.notificaciones)
    meeting: MeetingEntity;
}
