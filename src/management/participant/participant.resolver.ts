import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ParticipantService } from './participant.service';
import { Participant } from './participant.entity';
import { CreateParticipantDto } from './create-participant.dto';
import { UpdateParticipantDto } from './update-participant.dto';
import { ParticipantMSG } from 'src/constants';

@Resolver(() => Participant)
export class ParticipantResolver {
    constructor(private readonly participantService: ParticipantService) {}

    @Mutation('CREATE_PARTICIPANT')
    createParticipant(@Args('createParticipantDto') createParticipantDto: CreateParticipantDto) {
        return this.participantService.create(ParticipantMSG.CREATE, createParticipantDto);
    }

    @Query('FIND_PARTICIPANTS')
    findAll() {
        return this.participantService.findAll(ParticipantMSG.FIND_ALL);
    }

    @Query('FIND_PARTICIPANT')
    findOne(@Args('id') id: number) {
        return this.participantService.findOne(ParticipantMSG.FIND_ONE, id);
    }

    @Mutation('UPDATE_PARTICIPANT')
    updateParticipant(@Args('id') id:number, @Args('updateParticipantDto') updateParticipantDto: UpdateParticipantDto) {
        return this.participantService.update(ParticipantMSG.UPDATE, id, updateParticipantDto);
    }

    @Mutation('DELETE_PARTICIPANT')
    removeParticipant(@Args('id') id: number) {
        return this.participantService.remove(ParticipantMSG.DELETE, id);
    }
}