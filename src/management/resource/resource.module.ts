import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResourceService } from './resource.service';
import { Resource } from './resource.entity';
import { ResourceResolver } from './resource.resolver';
import { ProjectModule } from '../project/project.module';

@Module({
  imports: [TypeOrmModule.forFeature([Resource]), ProjectModule],
  providers: [ResourceService, ResourceResolver],
  controllers: []
})
export class ResourceModule {}