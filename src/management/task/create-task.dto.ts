import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsDate, IsOptional, IsNumber } from 'class-validator';

@InputType()
export class CreateTaskDto {
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    name: string;

    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    description: string;

    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    status: string;

    @IsNotEmpty()
    @IsDate()
    @Field(() => Date)
    start_date: Date;

    @IsNotEmpty()
    @IsDate()
    @Field(() => Date)
    end_date: Date;

    @IsNumber()
    @IsOptional()
    @Field(() => Number, { nullable: true })
    projectId: number;
}