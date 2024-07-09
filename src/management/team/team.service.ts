import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './team.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateTeamDto } from './create-team.dto';
import { UpdateTeamDto } from './update-team.dto';
import { ProjectService } from '../project/project.service';

@Injectable()
export class TeamService {
    constructor(
        @InjectRepository(Team)
        private teamRepository: Repository<Team>,
        private readonly projectRepository: ProjectService
    ) {}

    async create(action: string, createTeamDto: CreateTeamDto): Promise<Team> {
        try {
            const newTeam = this.teamRepository.create(createTeamDto);
            const project = await this.projectRepository.findOne(createTeamDto.projectId);
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
}
