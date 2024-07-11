import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';

@InputType()
export class CreateResourceDto {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  category: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  title: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  content: string;

  @IsInt()
  @IsOptional()
  @Field(() => Number, { nullable: true })
  projectId: number;
}