import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeamParticipantService } from './team-participant.service';
import { CreateTeamParticipantDto } from './create-team-participant.dto';
import { UpdateTeamParticipantDto } from './dto/update-team-participant.dto';

@Controller('team-participant')
export class TeamParticipantController {
  constructor(private readonly teamParticipantService: TeamParticipantService) {}

  @Post()
  create(@Body() createTeamParticipantDto: CreateTeamParticipantDto) {
    return this.teamParticipantService.create(createTeamParticipantDto);
  }

  @Get()
  findAll() {
    return this.teamParticipantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamParticipantService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeamParticipantDto: UpdateTeamParticipantDto) {
    return this.teamParticipantService.update(+id, updateTeamParticipantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamParticipantService.remove(+id);
  }
}
