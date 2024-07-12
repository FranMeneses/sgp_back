import { BadRequestException, forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateTeamParticipantDto } from './create-team-participant.dto';
import { UpdateTeamParticipantDto } from './update-team-participant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamParticipant } from './team-participant.entity';
import { Repository } from 'typeorm';
import { ParticipantService } from '../participant/participant.service';
import { ParticipantMSG, TaskMSG, TeamMSG, TeamParticipantMSG } from 'src/constants';
import { TeamService } from '../team/team.service';
import { Team } from '../team/team.entity';
import { Participant } from '../participant/participant.entity';
import { TaskService } from '../task/task.service';

@Injectable()
export class TeamParticipantService {
  constructor(
    @InjectRepository(TeamParticipant)
    private teamParticipantRepository: Repository<TeamParticipant>,
    private readonly participantRepository: ParticipantService,
    private readonly teamRepository: TeamService,
    private readonly taskRepository: TaskService,
  ) {}

  async create(action: string, createTeamParticipantDto: CreateTeamParticipantDto) {
    try {
      const participant = await this.participantRepository.findOne(ParticipantMSG.FIND_ONE, createTeamParticipantDto.participantId);
      const team = await this.teamRepository.findOne(TeamMSG.FIND_ONE, createTeamParticipantDto.teamId);
      const Task = await this.taskRepository.findOne(TaskMSG.FIND_ONE, createTeamParticipantDto.taskId);
      const newTeamParticipant = this.teamParticipantRepository.create({
        participant: participant,
        team: team,
        role: createTeamParticipantDto.role,
        tasks: Task,
      });
  
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
      await this.teamParticipantRepository.update(id, updateTeamParticipantDto);
      return await this.teamParticipantRepository.findOne({ where: { id } });
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
        const teamParticipant = await this.teamParticipantRepository.find({ where: { participant }, relations: ['team'] });
        const teams = teamParticipant.map(tp => tp.team);
        return teams;
    } catch (error) {
        throw new BadRequestException(error.message);
    }
}

  async findParticipantsByTeam(action: string, id: number): Promise<Participant[]> {
    try {
      const team = await this.teamRepository.findOne(TeamMSG.FIND_ONE, id);
      const teamParticipant = await this.teamParticipantRepository.find({ where: { team }, relations: ['participant'] });
      const participants = teamParticipant.map(tp => tp.participant);
      return participants;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findProjectsByParticipant(action: string, id: number) {
    try {
      const participant = await this.participantRepository.findOne(ParticipantMSG.FIND_ONE, id);
      const teamParticipant = await this.teamParticipantRepository.find({ where: { participant }, relations: ['team'] });
      const teams = teamParticipant.map(tp => tp.team);
      const projects = [];
      for (const team of teams) {
        const project = await this.teamRepository.findProjectsByTeam(TeamMSG.FIND_PROJECTS_BY_TEAM, team.id);
        projects.push(project);
      }
      return projects;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findParticipantsByProject(action: string, id: number): Promise<Participant[]> {
    try {
      const teams = await this.teamRepository.findTeamsByProject(TeamMSG.FIND_TEAMS_BY_PROJECT, id);
      const teamParticipant = await this.teamParticipantRepository.find({ where: { team: teams }, relations: ['participant'] });
      const participants = teamParticipant.map(tp => tp.participant);
      return participants;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findRolesByParticipantAndTeam(action: string, participant_id: number, team_id: number) {
    try {
      const participant = await this.participantRepository.findOne(ParticipantMSG.FIND_ONE, participant_id);
      const team = await this.teamRepository.findOne(TeamMSG.FIND_ONE, team_id);
      const teamParticipant = await this.teamParticipantRepository.find({ where: { participant, team } });
      return teamParticipant;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
