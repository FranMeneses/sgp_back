import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateProjectDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    amount_participants: number;

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    start_date: Date;

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    end_date: Date;
}