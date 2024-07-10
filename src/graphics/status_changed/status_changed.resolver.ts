import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StatusChangedService } from './status_changed.service';
import { StatusChanged } from './status_changed.entity';
import { CreateStatusChangedDto } from './create-status_changed.dto';
import { UpdateStatusChangedDto } from './update-status_changed.dto';
import { StatusChangedMSG } from 'src/constants';

@Resolver(() => StatusChanged)
export class StatusChangedResolver {
  constructor(private readonly statusChangedService: StatusChangedService) {}

  @Mutation(() => StatusChanged, { name: 'CREATE_STATUS_CHANGED' })
  createStatusChanged(@Args('createStatusChangedDto') createStatusChangedDto: CreateStatusChangedDto) {
    return this.statusChangedService.create(StatusChangedMSG.CREATE, createStatusChangedDto);
  }

  @Query(() => [StatusChanged], { name: 'FIND_STATUSES_CHANGED' })
  findAll() {
    return this.statusChangedService.findAll(StatusChangedMSG.FIND_ALL);
  }

  @Query(() => StatusChanged, { name: 'FIND_STATUS_CHANGED' })
  findOne(@Args('id') id: number) {
    return this.statusChangedService.findOne(StatusChangedMSG.FIND_ONE, id);
  }

  @Mutation(() => StatusChanged, { name: 'UPDATE_STATUS_CHANGED' })
  updateStatusChanged(@Args('id') id:number, @Args('updateStatusChangedDto') updateStatusChangedDto: UpdateStatusChangedDto) {
    return this.statusChangedService.update(StatusChangedMSG.UPDATE, id, updateStatusChangedDto);
  }

  @Mutation(() => StatusChanged, { name: 'DELETE_STATUS_CHANGED' })
  removeStatusChanged(@Args('id') id: number) {
    return this.statusChangedService.remove(StatusChangedMSG.DELETE, id);
  }
}