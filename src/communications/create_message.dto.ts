import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsString, IsDate, IsOptional } from 'class-validator';

@InputType()
export class CreateMessageDto {
  @Field(() => Number, { nullable: true })
  @IsNumber()
  @IsOptional()
  conversationId: number;

  @IsNumber()
  @IsOptional()
  @Field(() => Number, { nullable: true })
  participantId: number;

  @IsString()
  @Field(() => String)
  content: string;

  @IsDate()
  @Field(() => Date)
  date: Date;
}