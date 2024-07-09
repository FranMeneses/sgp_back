import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { Equal } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  create(task: Task) {
    return this.taskRepository.save(task);
  }

  findAll() {
    return this.taskRepository.find();
  }

  findOne(id: number) {
    return this.taskRepository.findOne({ where: { id } });
  }

  findTaskByProjectId(projectId: number) {
    return this.taskRepository.find({ where: { project: Equal(projectId) } });
  }

  update(id: number, task: Task) {
    return this.taskRepository.update(id, task);
  }

  remove(id: number) {
    return this.taskRepository.delete(id);
  }
}