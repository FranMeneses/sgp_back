import { Module } from '@nestjs/common';
import { TeamParticipantService } from './team-participant.service';
import { TeamParticipantController } from './team-participant.controller';

@Module({
  controllers: [TeamParticipantController],
  providers: [TeamParticipantService],
})
export class TeamParticipantModule {}
