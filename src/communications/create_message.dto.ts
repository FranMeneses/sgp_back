import { IsNumber, IsString, IsDate } from 'class-validator';

export class CreateMessageDto {
  @IsNumber()
  id_conversation: number;

  @IsNumber()
  id_participant: number;

  @IsString()
  content: string;

  @IsDate()
  date: Date;
}