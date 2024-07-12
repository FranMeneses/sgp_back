import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Participant } from './participant.entity';
import { CreateParticipantDto } from './create-participant.dto';
import { UpdateParticipantDto } from './update-participant.dto';

@Injectable()
export class ParticipantService {
  constructor(
    @InjectRepository(Participant)
    private participantRepository: Repository<Participant>,
  ) {}

  async create(action: string, createParticipantDto: CreateParticipantDto): Promise<Participant> {
    try {
      const newParticipant = this.participantRepository.create(createParticipantDto);
      return await this.participantRepository.save(newParticipant);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(action: string) {
    return await this.participantRepository.find();
  }

  async findOne(action: string, id: number) {
    return await this.participantRepository.findOne({ where: { id } });
  }

  async update(action:string, id: number, updateParticipantDto: UpdateParticipantDto): Promise<Participant> {
    try {
      await this.participantRepository.update(id, updateParticipantDto);
      return await this.participantRepository.findOne({ where: { id } });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(action: string, id: number) {
    try {
      const deletedParticipant = this.participantRepository.delete(id);
      return await deletedParticipant;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findByRut(action: string, rut: string) {
    return await this.participantRepository.findOne({ where: { rut } });
  }
}