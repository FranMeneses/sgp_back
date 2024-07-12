import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Resource } from './resource.entity';
import { CreateResourceDto } from './create-resource.dto';
import { UpdateResourceDto } from './update-resource.dto';
import { Equal } from 'typeorm';
import { ProjectService } from '../project/project.service';
import { ResourceMSG } from 'src/constants';

@Injectable()
export class ResourceService {
  constructor(
    @InjectRepository(Resource)
    private resourceRepository: Repository<Resource>,
    private readonly projectRepository: ProjectService,
  ) {}

  async create(action: string, createResourceDto: CreateResourceDto): Promise<Resource> {
    try {
      const newResource = this.resourceRepository.create(createResourceDto);
      const project = await this.projectRepository.findOne(ResourceMSG.FIND_ONE, createResourceDto.projectId);
      newResource.project = project;
      return await this.resourceRepository.save(newResource);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(action: string) {
    return await this.resourceRepository.find();
  }

  async findOne(action: string, id: number) {
    return await this.resourceRepository.findOne({ where: { id } });
  }
  
  async findByProject(action: string, projectId: number) {
    return await this.resourceRepository.find({ where: { project: Equal(projectId) } });
  }
  
  async update(action: string, id: number, updateResourceDto: UpdateResourceDto): Promise<Resource> {
    try {
      await this.resourceRepository.update(id, updateResourceDto);
      return await this.resourceRepository.findOne({ where: { id } });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(action: string, id: number) {
    try {
      const resource = await this.resourceRepository.findOne({ where: { id } });
      if (!resource) {
        throw new BadRequestException('Resource not found');
      }
      await this.resourceRepository.delete(id);
      return resource;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}