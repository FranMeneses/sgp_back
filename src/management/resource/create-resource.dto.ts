import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

@InputType()
export class CreateResourceDto {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  category: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  content: string;

  @IsInt()
  @IsNotEmpty()
  @Field(() => Number)
  projectId: number;
}