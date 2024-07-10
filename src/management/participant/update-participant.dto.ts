import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateParticipantDto {
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  name?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  last_name?: string;

  @IsOptional()
  @IsEmail()
  @Field(() => String, { nullable: true })
  email?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  password?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  rut?: string;

  @IsOptional()
  @IsNumber()
  @Field(() => Number, { nullable: true })
  teamParticipantId?: number;

  @IsOptional()
  @IsNumber()
  @Field(() => Number, { nullable: true })
  participantConversationId?: number;
}