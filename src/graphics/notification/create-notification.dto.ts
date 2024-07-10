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
  @IsNotEmpty()
  @Field(() => Date)
  date: Date;

  @IsNumber()
  @IsOptional()
  @Field(() => Number, { nullable: true })
  taskId: number;
}