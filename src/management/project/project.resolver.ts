import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project } from './project.entity';
import { CreateProjectDto } from './create-project.dto';
import { UpdateProjectDto } from './update-project.dto';
import { ProjectMSG } from 'src/constants';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Mutation(() => Project, { name: 'CREATE_PROJECT' })
  createProject(@Args('createProjectDto') createProjectDto: CreateProjectDto) {
    return this.projectService.create(ProjectMSG.CREATE, createProjectDto);
  }

  @Query(() => [Project], { name: 'FIND_PROJECTS' })
  findAll() {
    return this.projectService.findAll(ProjectMSG.FIND_ALL);
  }

  @Query(() => Project, { name: 'FIND_PROJECT' })
  findOne(@Args('id') id: number) {
    return this.projectService.findOne(ProjectMSG.FIND_ONE, id);
  }

  @Mutation(() => Project, { name: 'UPDATE_PROJECT' })
  updateProject(@Args('id') id: number, @Args('updateProjectDto') updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(ProjectMSG.UPDATE, id, updateProjectDto);
  }

  @Mutation(() => Project, { name: 'DELETE_PROJECT' })
  removeProject(@Args('id') id: number) {
    return this.projectService.remove(ProjectMSG.DELETE, id);
  }

  @Query(() => [Project], { name: 'FIND_PROJECTS_BY_PARTICIPANT' })
  findProjectByParticipant(@Args('id') id: number) {
    return this.projectService.findProjectByParticipant(ProjectMSG.FIND_PROJECTS_BY_PARTICIPANT, id);
  }
}