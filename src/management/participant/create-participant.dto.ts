import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

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

  @IsNotEmpty()
  @IsNumber()
  @Field(() => Number)
  teamParticipantId: number;

  @IsNotEmpty()
  @IsNumber()
  @Field(() => Number)
  participantConversationId: number;
}