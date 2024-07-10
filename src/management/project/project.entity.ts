import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Team } from '../team/team.entity';
import { Task } from '../task/task.entity';
import { Resource } from '../resource/resource.entity';
import { Comment } from '../comment/comment.entity';
import { Meeting } from '../meeting/meeting.entity';
import { Archive } from 'src/documents_management/entities/archive.entity';
import { IsOptional } from 'class-validator';

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
    @IsOptional()
    @Field(() => [Team], { nullable: true })
    teams: Team[];

    @OneToMany(() => Task, task => task.project)
    @IsOptional()
    @Field(() => [Task], { nullable: true })
    tasks: Task[];

    @OneToMany(() => Resource, resource => resource.project)
    @IsOptional()
    @Field(() => [Resource], { nullable: true })
    resources: Resource[];

    @OneToMany(() => Comment, comment => comment.project)
    @IsOptional()
    @Field(() => [Comment], { nullable: true })
    comments: Comment[];

    @OneToMany(() => Meeting, meeting => meeting.project)
    @IsOptional()
    @Field(() => [Meeting], { nullable: true })
    meetings: Meeting[];

    @OneToMany(() => Archive, archive => archive.project)
    @IsOptional()
    @Field(() => [Archive], { nullable: true })
    archives: Archive[];
}