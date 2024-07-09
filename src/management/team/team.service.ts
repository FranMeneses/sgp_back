import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './entity/team.entity';
import { Repository } from 'typeorm';
import { CreateTeamDTO } from './dto/create_team.dto';
import { UpdateTeamDTO } from './dto/update_team.dto';
import { ProjectService } from '../project/project.service';

@Injectable()
export class TeamService {
    constructor(
        @InjectRepository(Team)
        private teamRepository: Repository<Team>,
        private readonly projectService: ProjectService
    ) {}
    
    async create(CreateTeamDTO: CreateTeamDTO) {
        const team = new Team();
        team.name = CreateTeamDTO.name;
        team.type = CreateTeamDTO.type;
        team.description = CreateTeamDTO.description;
        team.project = await this.projectService.findOne(CreateTeamDTO.projectId);
        return this.teamRepository.save(team);
    }

    findAll() {
        return this.teamRepository.find();
    }

    findOne(id: number) {
        return this.teamRepository.findOne({ where: { id } });
    }

    update(id: number, UpdateTeamDTO: UpdateTeamDTO) {
        return this.teamRepository.update(id, UpdateTeamDTO);
    }

    remove(id: number) {
        return this.teamRepository.delete(id);
    }
}
