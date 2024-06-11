import { Entity, PrimaryGeneratedColumn,Column } from "typeorm";

@Entity()
export class Participant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
  
    @Column()
    email: string;
  
    @Column()
    password: string;

    @Column()
    rut: string;

    @Column()
    surname: string;
}
