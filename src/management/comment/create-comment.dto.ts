import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

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
    @IsNotEmpty()
    @Field(() => Number)
    project_id: number;

    @IsNumber()
    @IsNotEmpty()
    @Field(() => Number)
    task_id: number;
}