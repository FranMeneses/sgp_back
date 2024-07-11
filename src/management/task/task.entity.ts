import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Project } from '../project/project.entity';
import { Comment } from '../comment/comment.entity';
import { TeamParticipant } from '../team-participant/team-participant.entity';
import { Notification } from 'src/graphics/notification/notification.entity';
import { StatusChanged } from 'src/graphics/status_changed/status_changed.entity';
import { IsOptional } from 'class-validator';

@Entity()
@ObjectType()
export class Task {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    description: string;

    @Column()
    @Field()
    status: string;

    @Column()
    @Field()
    start_date: Date;

    @Column()
    @Field()
    end_date: Date;

    @ManyToOne(() => Project, project => project.tasks)
    @IsOptional()
    @Field(() => Project, { nullable: true })
    project: Project;

    @ManyToOne(() => TeamParticipant, teamParticipant => teamParticipant.tasks)
    @IsOptional()
    @Field(() => TeamParticipant, { nullable: true })
    teamParticipant: TeamParticipant;

    @OneToMany(() => Comment, comment => comment.task)
    @IsOptional()
    @Field(() => [Comment], { nullable: true })
    comments: Comment[];

    @OneToOne(() => Notification, notification => notification.task)
    @IsOptional()
    @Field(() => Notification, { nullable: true })
    notification: Notification;

    @OneToOne(() => StatusChanged, statusChanged => statusChanged.task)
    @IsOptional()
    @Field(() => StatusChanged, { nullable: true })
    statusChanged: StatusChanged;
}