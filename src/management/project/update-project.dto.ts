import { IsOptional, IsString, IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateProjectDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsNumber()
    amount_participants?: number;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    start_date?: Date;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    end_date?: Date;
}