import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

@InputType()
export class CreateParticipantConversationDto {
    @IsNumber()
    @IsOptional()
    @Field(() => Number, { nullable: true })
    id_participant: number;

    @IsNumber()
    @IsOptional()
    @Field(() => Number, { nullable: true })
    id_conversation: number;
}