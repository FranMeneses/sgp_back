import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ResourceService } from './resource.service';
import { Resource } from './resource.entity';
import { CreateResourceDto } from './create-resource.dto';
import { UpdateResourceDto } from './update-resource.dto';
import { ResourceMSG } from 'src/constants';

@Resolver(() => Resource)
export class ResourceResolver {
  constructor(private readonly resourceService: ResourceService) {}

  @Mutation(() => Resource, { name: 'CREATE_RESOURCE' }) // Corrección aquí
  createResource(@Args('createResourceDto') createResourceDto: CreateResourceDto) {
    return this.resourceService.create(ResourceMSG.CREATE, createResourceDto);
  }

  @Query(() => [Resource], { name: 'FIND_RESOURCES' }) // Corrección aquí
  findAll() {
    return this.resourceService.findAll(ResourceMSG.FIND_ALL);
  }

  @Query(() => Resource, { name: 'FIND_RESOURCE' }) // Corrección aquí
  findOne(@Args('id') id: number) {
    return this.resourceService.findOne(ResourceMSG.FIND_ONE, id);
  }

  @Mutation(() => Resource, { name: 'UPDATE_RESOURCE' }) // Corrección aquí
  updateResource(@Args('id') id:number, @Args('updateResourceDto') updateResourceDto: UpdateResourceDto) {
    return this.resourceService.update(ResourceMSG.UPDATE, id, updateResourceDto);
  }

  @Mutation(() => Resource, { name: 'DELETE_RESOURCE' }) // Corrección aquí
  removeResource(@Args('id') id: number) {
    return this.resourceService.remove(ResourceMSG.DELETE, id);
  }
}