import { forwardRef, Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { Team } from './team.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamResolver } from './team.resolver';
import { ProjectModule } from '../project/project.module';

@Module({
  imports: [TypeOrmModule.forFeature([Team]), forwardRef(() => ProjectModule)],
  providers: [TeamService, TeamResolver],
  controllers: [],
  exports: [TeamService],
})
export class TeamModule {}
