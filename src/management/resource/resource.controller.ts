import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ResourceService } from './resource.service';
import { Resource } from './resource.entity';

@Controller('resource')
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @Post()
  create(@Body() resource: Resource) {
    return this.resourceService.create(resource);
  }

  @Get()
  findAll() {
    return this.resourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.resourceService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() resource: Resource) {
    return this.resourceService.update(id, resource);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.resourceService.remove(id);
  }
}