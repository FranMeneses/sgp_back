import { IsString, IsOptional, IsInt } from 'class-validator';

export class UpdateResourceDto {
  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsInt()
  projectId?: number;
}