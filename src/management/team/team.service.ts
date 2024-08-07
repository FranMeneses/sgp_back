import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './team.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateTeamDto } from './create-team.dto';
import { UpdateTeamDto } from './update-team.dto';
import { ProjectService } from '../project/project.service';
import { ProjectMSG } from 'src/constants';
import { Project } from '../project/project.entity';

@Injectable()
export class TeamService {
    constructor(
        @InjectRepository(Team)
        private teamRepository: Repository<Team>,
        private readonly projectRepository: ProjectService,
    ) {}

    async create(action: string, createTeamDto: CreateTeamDto): Promise<Team> {
        try {
            const newTeam = this.teamRepository.create(createTeamDto);
            const project = await this.projectRepository.findOne(ProjectMSG.FIND_ONE, createTeamDto.projectId);
            if (!project) {
                throw new BadRequestException('Project not found');
            }
            newTeam.project = project;
            return await this.teamRepository.save(newTeam);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async findAll(action: string) {
        return await this.teamRepository.find();
    }

    async findOne(action: string, id: number) {
        return await this.teamRepository.findOne({ where: { id } });
    }

    async update(action: string, id: number, updateTeamDto: UpdateTeamDto): Promise<Team> {
        try {
            await this.teamRepository.update(id, updateTeamDto);
            return await this.teamRepository.findOne({ where: { id } });
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async remove(action: string, id: number) {
        try {
            const team = await this.teamRepository.findOne({ where: { id } });
            if (!team) {
                throw new BadRequestException('Team not found');
            }
            await this.teamRepository.delete(id);
            return team;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async findTeamsByProject(action: string, id: number): Promise<Team[]> {
        try {
            const project = await this.projectRepository.findOne(ProjectMSG.FIND_ONE, id);
            const teams = await this.teamRepository.find({ where: { project } });
            return teams;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async findProjectsByTeam(action: string, id: number): Promise<Project> {
        try {
            const project = await this.teamRepository.findOne({ where: { id }, relations: ['project'] });
            return project.project;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}
