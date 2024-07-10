import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTeamParticipantDto } from './create-team-participant.dto';
import { UpdateTeamParticipantDto } from './update-team-participant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamParticipant } from './team-participant.entity';
import { Repository } from 'typeorm';
import { ParticipantService } from '../participant/participant.service';
import { ParticipantMSG, TeamMSG } from 'src/constants';
import { TeamService } from '../team/team.service';

@Injectable()
export class TeamParticipantService {
  constructor(
    @InjectRepository(TeamParticipant)
    private teamParticipantRepository: Repository<TeamParticipant>,
    private readonly participantRepository: ParticipantService,
    private readonly teamRepository: TeamService,
  ) {}

  async create(action: string, createTeamParticipantDto: CreateTeamParticipantDto) {
    try {
      const participant = await this.participantRepository.findOne(ParticipantMSG.FIND_ONE,createTeamParticipantDto.id_participant);
      if (!participant) {
        throw new BadRequestException('Participant not found');
      }
      const team = await this.teamRepository.findOne(TeamMSG.FIND_ONE,createTeamParticipantDto.id_team);
      if (!team) {
        throw new BadRequestException('Team not found');
      }
      
      const newTeamParticipant = this.teamParticipantRepository.create({participant: participant, team: team, role: createTeamParticipantDto.role});
      
      return await this.teamParticipantRepository.save(newTeamParticipant);

    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(action: string) {
    return await this.teamParticipantRepository.find();
  }

  async findOne(action: string, id: number) {
    return await this.teamParticipantRepository.findOne({ where: { id } });
  }

  async update(action: string, id: number, updateTeamParticipantDto: UpdateTeamParticipantDto) {
    try{
      const updatedTeamParticipant = this.teamParticipantRepository.update(id, {role: updateTeamParticipantDto.role});
      return await updatedTeamParticipant;
    }catch(error){
      throw new BadRequestException(error.message);
    }
  }

  async remove(action: string, id: number) {
    return await this.teamParticipantRepository.delete(id);
  }
}
