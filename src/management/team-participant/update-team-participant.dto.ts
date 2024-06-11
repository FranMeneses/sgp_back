import { PartialType } from '@nestjs/mapped-types';
import { CreateTeamParticipantDto } from '../create-team-participant.dto';

export class UpdateTeamParticipantDto extends PartialType(CreateTeamParticipantDto) {}
