import { Injectable, BadRequestException, forwardRef, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './team.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateTeamDto } from './create-team.dto';
import { UpdateTeamDto } from './update-team.dto';
import { ProjectService } from '../project/project.service';
import { ProjectMSG } from 'src/constants';

@Injectable()
export class TeamService {
    constructor(
        @InjectRepository(Team)
        private teamRepository: Repository<Team>,
        @Inject(forwardRef(() => ProjectService))
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

    async update(action: string, id: number, UpdateTeamDto: UpdateTeamDto): Promise<UpdateResult> {
        try {
            const updatedTeam = this.teamRepository.update(id, UpdateTeamDto);
            return await updatedTeam;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async remove(action: string, id: number) {
        try {
            const deletedTeam = this.teamRepository.delete(id);
            return await deletedTeam;
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
}
