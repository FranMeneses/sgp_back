import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipantService } from './participant.service';
import { Participant } from './participant.entity';
import { ParticipantResolver } from './participant.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Participant])],
  providers: [ParticipantService, ParticipantResolver],
  controllers: []
})
export class ParticipantModule {}