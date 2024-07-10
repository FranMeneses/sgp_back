import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString, IsDate } from 'class-validator';

@InputType()
export class CreateDocumentDto {

  @IsString()
  @IsNotEmpty()
  name: string; 

  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNumber()
  @IsNotEmpty()
  id_project: number;
}