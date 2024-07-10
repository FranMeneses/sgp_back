import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateParticipantDto {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  last_name: string;

  @IsNotEmpty()
  @IsEmail()
  @Field(() => String)
  email: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  password: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  rut: string;

  @IsNumber()
  @IsOptional()
  @Field(() => Number, { nullable: true })
  teamParticipantId: number;

  @IsNumber()
  @IsOptional()
  @Field(() => Number, { nullable: true })
  participantConversationId: number;
}