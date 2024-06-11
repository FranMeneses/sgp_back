import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Participant } from './participant.entity';

@Injectable()
export class ParticipantService {
  constructor(
    @InjectRepository(Participant)
    private participantRepository: Repository<Participant>,
  ) {}

  create(participant: Participant) {
    return this.participantRepository.save(participant);
  }

  findAll() {
    return this.participantRepository.find();
  }

  findOne(id: number) {
    return this.participantRepository.findOne({ where: { id } });
  }

  update(id: number, participant: Participant) {
    return this.participantRepository.update(id, participant);
  }

  remove(id: number) {
    return this.participantRepository.delete(id);
  }
}