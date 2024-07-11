import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipantService } from './participant.service';
import { Participant } from './participant.entity';
import { ParticipantResolver } from './participant.resolver';
import { TeamModule } from '../team/team.module';
import { TeamParticipantModule } from '../team-participant/team-participant.module';

@Module({
  imports: [TypeOrmModule.forFeature([Participant]), forwardRef(() => TeamModule), forwardRef(() => TeamParticipantModule)],
  providers: [ParticipantService, ParticipantResolver],
  controllers: [],
  exports: [ParticipantService],
})
export class ParticipantModule {}