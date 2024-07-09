import { IsString, IsOptional, IsDate, IsInt } from 'class-validator';

export class UpdateTaskDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    status?: string;

    @IsOptional()
    @IsDate()
    start_date?: Date;

    @IsOptional()
    @IsDate()
    end_date?: Date;

    @IsOptional()
    @IsInt()
    projectId?: number;
}