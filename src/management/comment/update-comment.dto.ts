import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateCommentDto {
    @IsString()
    @IsOptional()
    @Field(() => String, { nullable: true })
    content: string;

    @IsDate()
    @IsOptional()
    @Field(() => Date, { nullable: true })
    date: Date;

    @IsNumber()
    @IsOptional()
    @Field(() => Number, { nullable: true })
    participantId: number;

    @IsNumber()
    @IsOptional()
    @Field(() => Number, { nullable: true })
    projectId: number;

    @IsNumber()
    @IsOptional()
    @Field(() => Number, { nullable: true })
    taskId: number;
}