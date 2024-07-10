import { PartialType } from '@nestjs/mapped-types';
import { CreateParticipantDto } from './create-participant.dto';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UpdateParticipantDto extends PartialType(CreateParticipantDto) {}