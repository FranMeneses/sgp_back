import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsOptional, IsNumber, IsDate } from 'class-validator';

@InputType()
export class CreateNotificationDto {
  @IsNumber()
  @IsNotEmpty()
  @Field(() => Number)
  id: number;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  content: string;

  @IsDate()
  @IsOptional()
  @Field(() => Date, { nullable: true })
  date: Date;

  @IsNumber()
  @IsNotEmpty()
  @Field(() => Number)
  taskId: number;
}