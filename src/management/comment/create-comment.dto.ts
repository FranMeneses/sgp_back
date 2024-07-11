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
    project_id: number;

    @IsNumber()
    @IsOptional()
    @Field(() => Number, { nullable: true })
    task_id: number;

    @IsNumber()
    @IsOptional()
    @Field(() => Number, { nullable: true })
    user_id: number;
}