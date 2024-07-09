import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCommentDto {
    @IsString()
    @IsNotEmpty()
    content: string;

    @IsDate()
    @IsNotEmpty()
    date: Date;

    @IsNumber()
    @IsNotEmpty()
    project_id: number;

    @IsNumber()
    @IsNotEmpty()
    task_id: number;
}