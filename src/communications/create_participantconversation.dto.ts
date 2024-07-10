import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class CreateParticipantConversationDto {
    @IsNumber()
    @Field(() => Number)
    id_participant: number;

    @IsNumber()
    @Field(() => Number)
    id_conversation: number;
}