import { IsNotEmpty, IsString, IsDate, IsNumber, IsNegative } from 'class-validator';
import { Task } from 'src/management/task/task.entity';

export class CreateStatusChangedDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsDate()
    date: Date;
    
    @IsNotEmpty()
    @IsString()
    previous_status: string;
    
    @IsNotEmpty()
    @IsString()
    actual_status: string;
    
    @IsNotEmpty()
    task: Task[];
}