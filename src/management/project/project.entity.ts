import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Team } from '../team/team.entity';
import { Task } from '../task/task.entity';
import { Resource } from '../resource/resource.entity';
import { Comment } from '../comment/comment.entity';
import { Meeting } from '../meeting/meeting.entity';
import { Archive } from 'src/documents_management/entities/archive.entity';

@Entity()
@ObjectType()
export class Project {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    amount_participants: number;

    @Column()
    @Field()
    start_date: Date;

    @Column()
    @Field()
    end_date: Date;

    @OneToMany(() => Team, team => team.project)
    @Field(() => [Team])
    teams: Team[];

    @OneToMany(() => Task, task => task.project)
    @Field(() => [Task])
    tasks: Task[];

    @OneToMany(() => Resource, resource => resource.project)
    @Field(() => [Resource])
    resources: Resource[];

    @OneToMany(() => Comment, comment => comment.project)
    @Field(() => [Comment])
    comments: Comment[];

    @OneToMany(() => Meeting, meeting => meeting.project)
    @Field(() => [Meeting])
    meetings: Meeting[];

    @OneToMany(() => Archive, archive => archive.project)
    @Field(() => [Archive])
    archives: Archive[];
}