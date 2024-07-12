import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsOptional } from 'class-validator';

@InputType()
export class CreateConversationDto {
  @IsNumber()
  @IsOptional()
  @Field(() => Number, { nullable: true })
  projectId: number;
}