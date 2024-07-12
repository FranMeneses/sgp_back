import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

@InputType()
export class CreateParticipantConversationDto {
    @IsNumber()
    @IsOptional()
    @Field(() => Number, { nullable: true })
    participantId: number;

    @IsNumber()
    @IsOptional()
    @Field(() => Number, { nullable: true })
    conversationId: number;
}