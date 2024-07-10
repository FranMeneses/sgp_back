import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Team } from "../team/team.entity";
import { Participant } from "../participant/participant.entity";
import { Task } from "../task/task.entity";

@Entity()
@ObjectType()
export class TeamParticipant {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;
    
    @OneToOne(() => Participant, { eager: true })
    @JoinColumn()
    @Field(() => Participant)
    participant: Participant;
    
    @OneToMany(() => Task, task => task.teamParticipant)
    @Field(() => [Task])
    tasks: Task[];

    @OneToOne(() => Team, { eager: true })
    @JoinColumn()
    @Field(() => Team)
    team: Team;

    @Column()
    @Field()
    role: string;
}