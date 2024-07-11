import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectService } from './project.service';
import { Project } from './project.entity';
import { ProjectResolver } from './project.resolver';
import { TeamParticipantModule } from '../team-participant/team-participant.module';

@Module({
  imports: [TypeOrmModule.forFeature([Project]), forwardRef(() => TeamParticipantModule)],
  controllers: [],
  providers: [ProjectService, ProjectResolver],
  exports: [ProjectService],
})
export class ProjectModule {}