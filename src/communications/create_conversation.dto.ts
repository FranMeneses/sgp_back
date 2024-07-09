import { IsNumber } from 'class-validator';

export class CreateConversationDto {
  @IsNumber()
  id_project: number;
}