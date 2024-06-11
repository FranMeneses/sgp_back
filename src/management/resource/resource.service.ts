import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resource } from './resource.entity';

@Injectable()
export class ResourceService {
  constructor(
    @InjectRepository(Resource)
    private resourceRepository: Repository<Resource>,
  ) {}

  create(resource: Resource) {
    return this.resourceRepository.save(resource);
  }

  findAll() {
    return this.resourceRepository.find();
  }

  findOne(id: number) {
    return this.resourceRepository.findOne({ where: { id } });
  }

  update(id: number, resource: Resource) {
    return this.resourceRepository.update(id, resource);
  }

  remove(id: number) {
    return this.resourceRepository.delete(id);
  }
}