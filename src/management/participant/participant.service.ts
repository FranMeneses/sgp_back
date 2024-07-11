import { BadRequestException, forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Participant } from './participant.entity';
import { CreateParticipantDto } from './create-participant.dto';
import { UpdateParticipantDto } from './update-participant.dto';
import { TeamMSG, TeamParticipantMSG } from 'src/constants';
import { TeamService } from '../team/team.service';
import { TeamParticipantService } from '../team-participant/team-participant.service';

@Injectable()
export class ParticipantService {
  constructor(
    @InjectRepository(Participant)
    private participantRepository: Repository<Participant>,
    @Inject(forwardRef(() => TeamService))
    private readonly teamRepository: TeamService,
    @Inject(forwardRef(() => TeamParticipantService))
    private readonly teamParticipantRepository: TeamParticipantService,
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

  async update(action:string, id: number, updateParticipantDto: UpdateParticipantDto): Promise<UpdateResult> {
    try {
      const updatedParticipant = this.participantRepository.update(id, updateParticipantDto);
      return await updatedParticipant;
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

  async findParticipantsByProject(action: string, id: number): Promise<Participant[]> {
    try {
      const teams = await this.teamRepository.findTeamsByProject(TeamMSG.FIND_TEAMS_BY_PROJECT, id);
      const teamParticipantsPromises = teams.map(team => this.teamParticipantRepository.findParticipantsByTeam(TeamParticipantMSG.FIND_PARTICIPANTS_BY_TEAM, team.id));
      const teamParticipantsArrays = await Promise.all(teamParticipantsPromises);
      const participants = teamParticipantsArrays.flatMap(tp => tp);
      return participants;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}