import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ResourceService } from './resource.service';
import { Resource } from './resource.entity';
import { CreateResourceDto } from './create-resource.dto';
import { UpdateResourceDto } from './update-resource.dto';
import { ResourceMSG } from 'src/constants';

@Resolver(() => Resource)
export class ResourceResolver {
  constructor(private readonly resourceService: ResourceService) {}

  @Mutation('CREATE_RESOURCE')
  createResource(@Args('createResourceDto') createResourceDto: CreateResourceDto) {
    return this.resourceService.create(ResourceMSG.CREATE, createResourceDto);
  }

  @Query('FIND_RESOURCES')
  findAll() {
    return this.resourceService.findAll(ResourceMSG.FIND_ALL);
  }

  @Query('FIND_RESOURCE')
  findOne(@Args('id') id: number) {
    return this.resourceService.findOne(ResourceMSG.FIND_ONE, id);
  }

  @Mutation('UPDATE_RESOURCE')
  updateResource(@Args('id') id:number, @Args('updateResourceDto') updateResourceDto: UpdateResourceDto) {
    return this.resourceService.update(ResourceMSG.UPDATE, id, updateResourceDto);
  }

  @Mutation('DELETE_RESOURCE')
  removeResource(@Args('id') id: number) {
    return this.resourceService.remove(ResourceMSG.DELETE, id);
  }
}