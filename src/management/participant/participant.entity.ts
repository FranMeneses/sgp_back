import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, Column, OneToMany, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToOne } from "typeorm";
import { Comment } from "../comment/comment.entity";
import { Meeting } from "../meeting/meeting.entity";
import { TeamParticipant } from "../team-participant/team-participant.entity";
import { ParticipantConversation } from "src/communications/participant_conversation.entity";
import { IsOptional } from 'class-validator';

@Entity()
@ObjectType()
export class Participant {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    last_name: string;

    @Column()
    @Field()
    email: string;

    @Column()
    @Field()
    password: string;

    @Column()
    @Field()
    rut: string;

    @OneToOne(() => TeamParticipant, teamParticipant => teamParticipant.id)
    @IsOptional()
    @Field(() => TeamParticipant,{ nullable: true })
    teamParticipant: TeamParticipant;

    @OneToOne(() => ParticipantConversation, participantConversation => participantConversation.id)
    @IsOptional()
    @Field(() => ParticipantConversation, { nullable: true })
    participantConversation: ParticipantConversation;

    @OneToMany(() => Comment, comment => comment.participant)
    @IsOptional()
    @Field(() => [Comment], { nullable: true })
    comments: Comment[];
}