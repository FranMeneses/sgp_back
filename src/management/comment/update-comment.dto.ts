import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCommentDto {
    @IsString()
    @IsOptional()
    content: string;

    @IsNumber()
    @IsOptional()
    project_id: number;

    @IsNumber()
    @IsOptional()
    task_id: number;
}