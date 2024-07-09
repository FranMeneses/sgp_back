import { IsString, IsNotEmpty, IsOptional, IsNumber, IsDate } from 'class-validator';

export class CreateNotificationDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsDate()
  @IsOptional()
  date: Date;

  @IsNumber()
  @IsNotEmpty()
  taskId: number;
}