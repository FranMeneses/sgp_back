import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateResourceDto {
  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsInt()
  projectId: number;
}