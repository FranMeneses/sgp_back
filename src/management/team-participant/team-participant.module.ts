import { forwardRef, Module } from '@nestjs/common';
import { TeamParticipantService } from './team-participant.service';
import { TeamParticipantResolver } from './team-participant.resolver';
import { TeamParticipant } from './team-participant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamModule } from '../team/team.module';
import { ParticipantModule } from '../participant/participant.module';

@Module({
  imports: [TypeOrmModule.forFeature([TeamParticipant]), forwardRef(() => TeamModule), forwardRef(() => ParticipantModule)],
  controllers: [],
  providers: [TeamParticipantService, TeamParticipantResolver],
  exports: [TeamParticipantService],
})
export class TeamParticipantModule {}
