import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

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