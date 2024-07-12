import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateCommentDto {
    @IsString()
    @IsNotEmpty()
    @Field(() => String)
    content: string;

    @IsDate()
    @IsNotEmpty()
    @Field(() => Date)
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