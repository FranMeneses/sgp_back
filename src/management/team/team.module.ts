import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { Team } from './team.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamResolver } from './team.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Team])],
  providers: [TeamService, TeamResolver],
  controllers: []
})
export class TeamModule {}
