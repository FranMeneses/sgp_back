import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateParticipantConversationDto {
    @IsNumber()
    id_participant: number;

    @IsNumber()
    id_conversation: number;
}