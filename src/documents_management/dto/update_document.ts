import { IsOptional, IsNumber, IsString, IsDate } from 'class-validator';

export class UpdateDocumentDto {

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsDate()
  date?: Date;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsNumber()
  id_project?: number;
}