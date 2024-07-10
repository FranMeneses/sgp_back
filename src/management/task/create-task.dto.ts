import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsDate, IsInt } from 'class-validator';

@InputType()
export class CreateTaskDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    status: string;

    @IsNotEmpty()
    @IsDate()
    start_date: Date;

    @IsNotEmpty()
    @IsDate()
    end_date: Date;

    @IsNotEmpty()
    @IsInt()
    projectId: number;
}