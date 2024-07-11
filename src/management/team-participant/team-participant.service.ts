import { BadRequestException, forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateTeamParticipantDto } from './create-team-participant.dto';
import { UpdateTeamParticipantDto } from './update-team-participant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamParticipant } from './team-participant.entity';
import { Repository } from 'typeorm';
import { ParticipantService } from '../participant/participant.service';
import { ParticipantMSG, TeamMSG } from 'src/constants';
import { TeamService } from '../team/team.service';
import { Team } from '../team/team.entity';
import { Participant } from '../participant/participant.entity';

@Injectable()
export class TeamParticipantService {
  constructor(
    @InjectRepository(TeamParticipant)
    private teamParticipantRepository: Repository<TeamParticipant>,
    @Inject(forwardRef(() => ParticipantService))
    private readonly participantRepository: ParticipantService,
    @Inject(forwardRef(() => TeamService))
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

  async findTeamsByParticipant(action: string, id: number): Promise<Team[]> {
    try {
        const participant = await this.participantRepository.findOne(ParticipantMSG.FIND_ONE, id);
        const teamParticipant = await this.teamParticipantRepository.find({ where: { participant } });
        const teams = teamParticipant.map(tp => tp.team);
        return teams;
    } catch (error) {
        throw new BadRequestException(error.message);
    }
  }

  async findParticipantsByTeam(action: string, id: number): Promise<Participant[]> {
    try {
      const team = await this.teamRepository.findOne(TeamMSG.FIND_ONE, id);
      const teamParticipant = await this.teamParticipantRepository.find({ where: { team } });
      const participants = teamParticipant.map(tp => tp.participant);
      return participants;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
