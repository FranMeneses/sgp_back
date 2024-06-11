import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { Participant } from './participant.entity';

@Controller('participant')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Post()
  create(@Body() participant: Participant) {
    return this.participantService.create(participant);
  }

  @Get()
  findAll() {
    return this.participantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.participantService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() participant: Participant) {
    return this.participantService.update(id, participant);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.participantService.remove(id);
  }
}