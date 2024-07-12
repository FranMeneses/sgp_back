import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
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
    
    @Column()
    @Field(() => Number)
    participantId: number;

    @OneToOne(() => Participant)
    @IsOptional()
    @JoinColumn({ name: 'participantId' })
    @Field(() => Participant, { nullable: true })
    participant: Participant;

    @Column()
    @Field(() => Number)
    taskId: number;
    
    @OneToOne(() => Task)
    @IsOptional()
    @JoinColumn({ name: 'taskId' })
    @Field(() => Task, { nullable: true })
    tasks: Task;

    @Column()
    @Field(() => Number)
    teamId: number;

    @ManyToOne(() => Team)
    @IsOptional()
    @JoinColumn({ name: 'teamId' })
    @Field(() => Team, { nullable: true })
    team: Team;

    @Column()
    @Field(() => String)
    role: string;
}