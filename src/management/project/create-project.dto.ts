import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProjectDto {
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    name: string;

    @IsNotEmpty()
    @IsNumber()
    @Field(() => Number)
    amount_participants: number;

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    @Field(() => Date)
    start_date: Date;

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    @Field(() => Date)
    end_date: Date;
}