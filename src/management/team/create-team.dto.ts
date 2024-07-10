import { InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class CreateTeamDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    type: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    projectId: number;
}