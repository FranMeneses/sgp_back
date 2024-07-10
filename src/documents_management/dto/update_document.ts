import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsNumber, IsString, IsDate } from 'class-validator';

@InputType()
export class UpdateDocumentDto {

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  name?: string;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  date?: Date;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  type?: string;

  @IsOptional()
  @IsNumber()
  @Field(() => Number, { nullable: true })
  id_project?: number;
}