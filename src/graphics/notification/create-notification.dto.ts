import { InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsOptional, IsNumber, IsDate } from 'class-validator';

@InputType()
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