import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TeamService } from './team.service';
import { Team } from './team.entity';
import { CreateTeamDto } from './create-team.dto';
import { UpdateTeamDto } from './update-team.dto';
import { TeamMSG } from 'src/constants';

@Resolver(() => Team)
export class TeamResolver {
  constructor(private readonly teamService: TeamService) {}

  @Mutation('CREATE_TEAM')
  createTeam(@Args('createTeamDto') createTeamDto: CreateTeamDto) {
    return this.teamService.create(TeamMSG.CREATE, createTeamDto);
  }

  @Query('FIND_TEAMS')
  findAll() {
    return this.teamService.findAll(TeamMSG.FIND_ALL);
  }

  @Query('FIND_TEAM')
  findOne(@Args('id') id: number) {
    return this.teamService.findOne(TeamMSG.FIND_ONE, id);
  }

  @Mutation('UPDATE_TEAM')
  updateTeam(@Args('id') id:number, @Args('updateTeamDto') updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(TeamMSG.UPDATE, id, updateTeamDto);
  }

  @Mutation('DELETE_TEAM')
  removeTeam(@Args('id') id: number) {
    return this.teamService.remove(TeamMSG.DELETE, id);
  }
}