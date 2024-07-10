import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateCommentDto {
    @IsString()
    @IsOptional()
    @Field(() => String, { nullable: true })
    content: string;

    @IsNumber()
    @IsOptional()
    @Field(() => Number, { nullable: true })
    project_id: number;

    @IsNumber()
    @IsOptional()
    @Field(() => Number, { nullable: true })
    task_id: number;
}