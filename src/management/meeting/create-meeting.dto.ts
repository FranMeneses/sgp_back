import { IsString, IsDate, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateMeetingDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsDate()
    date: Date;

    @IsOptional()
    projectId: number;

    @IsOptional()
    participantIds: number[];
}