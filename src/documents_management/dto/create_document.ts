import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString, IsDate, IsOptional } from 'class-validator';

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
  @IsOptional()
  id_project: number;
}