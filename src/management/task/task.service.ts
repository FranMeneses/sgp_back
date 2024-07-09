import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Task } from './task.entity';
import { Equal } from 'typeorm';
import { CreateTaskDto } from './create-task.dto';
import { UpdateTaskDto } from './update-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async create(action: string, createTaskDto: CreateTaskDto): Promise<Task> {
    try {
      const newTask = this.taskRepository.create(createTaskDto);
      return await this.taskRepository.save(newTask);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(action: string) {
    return await this.taskRepository.find();
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