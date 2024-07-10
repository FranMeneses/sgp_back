import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TeamParticipantService } from './team-participant.service';
import { TeamParticipant } from './team-participant.entity';
import { CreateTeamParticipantDto } from './create-team-participant.dto';
import { UpdateTeamParticipantDto } from './update-team-participant.dto';
import { TeamParticipantMSG } from 'src/constants';

@Resolver(() => TeamParticipant)
export class TeamParticipantResolver {
  constructor(private readonly teamParticipantService: TeamParticipantService) {}

  @Mutation(() => TeamParticipant, { name: 'CREATE_TEAM_PARTICIPANT' })
  createTeamParticipant(@Args('createTeamParticipantDto') createTeamParticipantDto: CreateTeamParticipantDto) {
    return this.teamParticipantService.create(TeamParticipantMSG.CREATE, createTeamParticipantDto);
  }

  @Query(() => [TeamParticipant], { name: 'FIND_TEAM_PARTICIPANTS' })
  findAll() {
    return this.teamParticipantService.findAll(TeamParticipantMSG.FIND_ALL);
  }

  @Query(() => TeamParticipant, { name: 'FIND_TEAM_PARTICIPANT' })
  findOne(@Args('id') id: number) {
    return this.teamParticipantService.findOne(TeamParticipantMSG.FIND_ONE, id);
  }

  @Mutation(() => TeamParticipant, { name: 'UPDATE_TEAM_PARTICIPANT' })
  updateTeamParticipant(@Args('id') id:number, @Args('updateTeamParticipantDto') updateTeamParticipantDto: UpdateTeamParticipantDto) {
    return this.teamParticipantService.update(TeamParticipantMSG.UPDATE, id, updateTeamParticipantDto);
  }

  @Mutation(() => TeamParticipant, { name: 'DELETE_TEAM_PARTICIPANT' })
  removeTeamParticipant(@Args('id') id: number) {
    return this.teamParticipantService.remove(TeamParticipantMSG.DELETE, id);
  }
}