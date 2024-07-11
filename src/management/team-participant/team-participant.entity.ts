import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Team } from "../team/team.entity";
import { Participant } from "../participant/participant.entity";
import { Task } from "../task/task.entity";
import { IsOptional } from "class-validator";

@Entity()
@ObjectType()
export class TeamParticipant {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;
    
    @OneToOne(() => Participant)
    @IsOptional()
    @Field(() => Participant, { nullable: true })
    participant: Participant;
    
    @OneToMany(() => Task, task => task.teamParticipant)
    @IsOptional()
    @Field(() => [Task], { nullable: true })
    tasks: Task[];

    @OneToOne(() => Team)
    @IsOptional()
    @Field(() => Team, { nullable: true })
    team: Team;

    @Column()
    @Field()
    role: string;
}