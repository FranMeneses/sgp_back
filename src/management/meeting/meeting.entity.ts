import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Notificacion } from "../notificacion/entities/notificacion.entity";

@Entity()
export class MeetingEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    date: Date;

    @OneToMany(() => Notificacion, notificacion => notificacion.meeting)
    notificaciones: Notificacion[];
}
