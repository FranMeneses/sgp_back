import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateTeamParticipantDto {
    @IsNumber()
    @IsOptional()
    id_participant: number;

    @IsNumber()
    @IsOptional()
    id_team: number;

    @IsNumber({}, { each: true })
    @IsOptional()
    id_task?: number[];

    @IsString()
    @IsNotEmpty()
    role: string;
}
