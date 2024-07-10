import { Field, InputType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@InputType()
export class CreateConversationDto {
  @IsNumber()
  @Field(() => Number)
  id_project: number;
}