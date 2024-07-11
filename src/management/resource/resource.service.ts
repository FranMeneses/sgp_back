import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Resource } from './resource.entity';
import { CreateResourceDto } from './create-resource.dto';
import { UpdateResourceDto } from './update-resource.dto';
import { Equal } from 'typeorm';

@Injectable()
export class ResourceService {
  constructor(
    @InjectRepository(Resource)
    private resourceRepository: Repository<Resource>,
  ) {}

  async create(action: string, createResourceDto: CreateResourceDto): Promise<Resource> {
    try {
      const newResource = this.resourceRepository.create(createResourceDto);
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
  
  async update(action: string, id: number, updateResourceDto: UpdateResourceDto): Promise<UpdateResult> {
    try {
      const updatedResource = this.resourceRepository.update(id, updateResourceDto);
      return await updatedResource;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(action: string, id: number) {
    try {
      const deletedResource = this.resourceRepository.delete(id);
      return await deletedResource;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}