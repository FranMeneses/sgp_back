import { Module } from '@nestjs/common';
import { TeamParticipantService } from './team-participant.service';
import { TeamParticipantResolver } from './team-participant.resolver';
import { TeamParticipant } from './team-participant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TeamParticipant])],
  controllers: [],
  providers: [TeamParticipantService, TeamParticipantResolver],
})
export class TeamParticipantModule {}
