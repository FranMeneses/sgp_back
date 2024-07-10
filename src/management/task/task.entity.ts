import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Project } from '../project/project.entity';
import { Comment } from '../comment/comment.entity';
import { TeamParticipant } from '../team-participant/team-participant.entity';
import { Notification } from 'src/graphics/notification/notification.entity';
import { StatusChanged } from 'src/graphics/status_changed/status_changed.entity';

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
    @Field(() => Project)
    project: Project;

    @ManyToOne(() => TeamParticipant, teamParticipant => teamParticipant.tasks)
    @Field(() => TeamParticipant)
    teamParticipant: TeamParticipant;

    @OneToMany(() => Comment, comment => comment.task)
    @Field(() => [Comment])
    comments: Comment[];

    @OneToOne(() => Notification, notification => notification.task)
    @JoinColumn() // This decorator is required to specify the column that joins the two entities.
    @Field(() => Notification)
    notification: Notification;

    @OneToOne(() => StatusChanged, statusChanged => statusChanged.task)
    @JoinColumn() // This decorator is also required for a OneToOne relationship.
    @Field(() => StatusChanged)
    statusChanged: StatusChanged;
}