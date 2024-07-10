import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsString, IsDate } from 'class-validator';

@InputType()
export class CreateMessageDto {
  @Field(() => Number)
  @IsNumber()
  id_conversation: number;

  @IsNumber()
  @Field(() => Number)
  id_participant: number;

  @IsString()
  @Field(() => String)
  content: string;

  @IsDate()
  @Field(() => Date)
  date: Date;
}