import { IsOptional, IsString } from 'class-validator';

export class UpdateTeamParticipantDto {
    @IsString()
    @IsOptional()
    role?: string;
}