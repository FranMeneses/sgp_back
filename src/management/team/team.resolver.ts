import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TeamService } from './team.service';
import { Team } from './team.entity';
import { CreateTeamDto } from './create-team.dto';
import { UpdateTeamDto } from './update-team.dto';
import { TeamMSG } from 'src/constants';
import { Project } from '../project/project.entity';

@Resolver(() => Team)
export class TeamResolver {
  constructor(private readonly teamService: TeamService) {}

  @Mutation(() => Team, { name: 'CREATE_TEAM' })
  createTeam(@Args('createTeamDto') createTeamDto: CreateTeamDto) {
    return this.teamService.create(TeamMSG.CREATE, createTeamDto);
  }

  @Query(() => [Team], { name: 'FIND_TEAMS' })
  findAll() {
    return this.teamService.findAll(TeamMSG.FIND_ALL);
  }

  @Query(() => Team, { name: 'FIND_TEAM' })
  findOne(@Args('id') id: number) {
    return this.teamService.findOne(TeamMSG.FIND_ONE, id);
  }

  @Mutation(() => Team, { name: 'UPDATE_TEAM' })
  updateTeam(@Args('id') id:number, @Args('updateTeamDto') updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(TeamMSG.UPDATE, id, updateTeamDto);
  }

  @Mutation(() => Team, { name: 'DELETE_TEAM' })
  removeTeam(@Args('id') id: number) {
    return this.teamService.remove(TeamMSG.DELETE, id);
  }

  @Query(() => [Team], { name: 'FIND_TEAMS_BY_PROJECT' })
  findTeamsByProject(@Args('id') id: number) {
    return this.teamService.findTeamsByProject(TeamMSG.FIND_TEAMS_BY_PROJECT, id);
  }

  @Query(() => [Project], { name: 'FIND_PROJECTS_BY_TEAM' })
  findProjectsByTeam(@Args('id') id: number) {
    return this.teamService.findProjectsByTeam(TeamMSG.FIND_PROJECTS_BY_TEAM, id);
  }
}