import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ParticipantService } from './participant.service';
import { Participant } from './participant.entity';
import { CreateParticipantDto } from './create-participant.dto';
import { UpdateParticipantDto } from './update-participant.dto';
import { ParticipantMSG } from 'src/constants';

@Resolver(() => Participant)
export class ParticipantResolver {
    constructor(private readonly participantService: ParticipantService) {}

    @Mutation(() => Participant, { name: 'CREATE_PARTICIPANT' }) // Especifica el tipo de retorno y el nombre de la operación
    createParticipant(@Args('createParticipantDto') createParticipantDto: CreateParticipantDto) {
        return this.participantService.create(ParticipantMSG.CREATE, createParticipantDto);
    }

    @Query(() => [Participant], { name: 'FIND_PARTICIPANTS' }) // Especifica el tipo de retorno para un array de Participant y el nombre de la operación
    findAll() {
        return this.participantService.findAll(ParticipantMSG.FIND_ALL);
    }

    @Query(() => Participant, { name: 'FIND_PARTICIPANT' }) // Especifica el tipo de retorno y el nombre de la operación
    findOne(@Args('id') id: number) {
        return this.participantService.findOne(ParticipantMSG.FIND_ONE, id);
    }

    @Mutation(() => Participant, { name: 'UPDATE_PARTICIPANT' }) // Especifica el tipo de retorno y el nombre de la operación
    updateParticipant(@Args('id') id:number, @Args('updateParticipantDto') updateParticipantDto: UpdateParticipantDto) {
        return this.participantService.update(ParticipantMSG.UPDATE, id, updateParticipantDto);
    }

    @Mutation(() => Participant, { name: 'DELETE_PARTICIPANT' }) // Especifica el tipo de retorno y el nombre de la operación, asumiendo que devuelve el participante eliminado
    removeParticipant(@Args('id') id: number) {
        return this.participantService.remove(ParticipantMSG.DELETE, id);
    }
}