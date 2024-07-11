import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipantService } from './participant.service';
import { Participant } from './participant.entity';
import { ParticipantResolver } from './participant.resolver';
import { ProjectModule } from '../project/project.module';

@Module({
  imports: [TypeOrmModule.forFeature([Participant])],
  providers: [ParticipantService, ParticipantResolver],
  controllers: [],
  exports: [ParticipantService],
})
export class ParticipantModule {}