import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { TaskResolver } from './task.resolver';
import { ProjectModule } from '../project/project.module';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), ProjectModule],
  controllers: [],
  providers: [TaskService, TaskResolver],
  exports: [TaskService]
})
export class TaskModule {}