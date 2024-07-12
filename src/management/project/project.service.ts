import { Injectable, BadRequestException, forwardRef, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
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

  async update(action: string, id: number, updateProjectDto: UpdateProjectDto): Promise<Project> {
    try {
      await this.projectRepository.update(id, updateProjectDto);
      return await this.projectRepository.findOne({ where: { id } });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  

  async remove(action: string, id: number) {
    try {
      const project = await this.projectRepository.findOne({ where: { id } });
      if (!project) {
        throw new BadRequestException('Project not found');
      }
      await this.projectRepository.delete(id);
      return project;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}