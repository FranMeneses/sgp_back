import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsOptional, IsNumber } from 'class-validator';

@InputType()
export class UpdateResourceDto {
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  title?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  category?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  content?: string;

  @IsOptional()
  @IsNumber()
  @Field(() => Number, { nullable: true })
  projectId?: number;
}