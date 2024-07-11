import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";
import { CreateTaskDto } from "./create-task.dto";
import { Task } from "./task.entity";
import { UpdateTaskDto } from "./update-task.dto";
import { ProjectService } from "../project/project.service";
import { ProjectMSG } from "src/constants";

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    private projectRepository: ProjectService,
  ) {}

  async create(action: string, createTaskDto: CreateTaskDto): Promise<Task> {
    try {
      const newTask = this.taskRepository.create(createTaskDto);
      const project = await this.projectRepository.findOne(ProjectMSG.CREATE, createTaskDto.projectId);
      newTask.project = project;
      return await this.taskRepository.save(newTask);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(action: string) {
    return await this.taskRepository.find();
  }

  async findOne(action: string, id: number) {
    return await this.taskRepository.findOne({ where: { id } });
  }

  async findTasksByProjectId (action:string, projectId: number){
    return this.taskRepository.find({
      where: { project: { id: projectId } },
    });
  }

  async update(action: string, id: number, updateTaskDto: UpdateTaskDto): Promise<UpdateResult> {
    try {
      const updatedTask = this.taskRepository.update(id, updateTaskDto);
      return await updatedTask;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(action: string, id: number) {
    try {
      const deletedTask = this.taskRepository.delete(id);
      return await deletedTask;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}