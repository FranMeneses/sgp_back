import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { StatusChanged } from './status_changed.entity';
import { CreateStatusChangedDto } from './create-status_changed.dto';
import { UpdateStatusChangedDto } from './update-status_changed.dto';

@Injectable()
export class StatusChangedService {
  constructor(
    @InjectRepository(StatusChanged)
    private statusChangedRepository: Repository<StatusChanged>,
  ) {}

  async create(action: string, createStatusChangedDto: CreateStatusChangedDto): Promise<StatusChanged> {
    try {
      const newStatusChanged = this.statusChangedRepository.create(createStatusChangedDto);
      return await this.statusChangedRepository.save(newStatusChanged);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(action: string) {
    return await this.statusChangedRepository.find();
  }

  async findOne(action: string, id: number) {
    return await this.statusChangedRepository.findOne({ where: { id } });
  }
  
  async update(action: string, id: number, updateStatusChangedDto: UpdateStatusChangedDto): Promise<UpdateResult> {
    try {
      const updatedStatusChanged = this.statusChangedRepository.update(id, updateStatusChangedDto);
      return await updatedStatusChanged;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(action: string, id: number) {
    try {
      const deletedStatusChanged = this.statusChangedRepository.delete(id);
      return await deletedStatusChanged;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}