import { Injectable, BadRequestException, forwardRef, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository, UpdateResult } from 'typeorm';
import { Project } from './project.entity';
import { CreateProjectDto } from './create-project.dto';
import { UpdateProjectDto } from './update-project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  async create(action: string, createProject: CreateProjectDto): Promise<Project> {
    try {
      const newProject = this.projectRepository.create(createProject);
      return await this.projectRepository.save(newProject);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(action: string) {
    return await this.projectRepository.find();
  }

  async findOne(action:string, id: number) {
    return await this.projectRepository.findOne({ where: { id } });
  }

  async update(action: string, id: number, updatedProjectDto: UpdateProjectDto): Promise<UpdateResult>{
    try {
      const updatedProject = this.projectRepository.update(id, updatedProjectDto);
      return await updatedProject;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(action:string, id: number) {
    try {
      const deletedProject = this.projectRepository.delete(id);
      return await deletedProject;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}