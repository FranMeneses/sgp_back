import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectService } from './project.service';
import { Project } from './project.entity';
import { ProjectResolver } from './project.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [],
  providers: [ProjectService, ProjectResolver],
  exports: [ProjectService],
})
export class ProjectModule {}