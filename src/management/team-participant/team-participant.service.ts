import { Injectable } from '@nestjs/common';
import { CreateTeamParticipantDto } from './create-team-participant.dto';
import { UpdateTeamParticipantDto } from './dto/update-team-participant.dto';

@Injectable()
export class TeamParticipantService {
  create(createTeamParticipantDto: CreateTeamParticipantDto) {
    return 'This action adds a new teamParticipant';
  }

  findAll() {
    return `This action returns all teamParticipant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teamParticipant`;
  }

  update(id: number, updateTeamParticipantDto: UpdateTeamParticipantDto) {
    return `This action updates a #${id} teamParticipant`;
  }

  remove(id: number) {
    return `This action removes a #${id} teamParticipant`;
  }
}
