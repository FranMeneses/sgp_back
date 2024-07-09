import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { TaskResolver } from './task.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [],
  providers: [TaskService, TaskResolver],
})
export class TaskModule {}