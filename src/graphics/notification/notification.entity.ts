import { Task } from "src/management/task/task.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Notification {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    content: string;

    @Column()
    date: Date;

    @OneToOne(() => Task, task => task.notification)
    task: Task[];
}
