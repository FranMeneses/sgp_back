import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './create-task.dto';
import { UpdateTaskDto } from './update-task.dto';
import { TaskMSG } from 'src/constants';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Mutation(() => Task, { name: 'CREATE_TASK' })
  createTask(@Args('createTaskDto') createTaskDto: CreateTaskDto) {
    return this.taskService.create(TaskMSG.CREATE, createTaskDto);
  }

  @Query(() => [Task], { name: 'FIND_TASKS' })
  findAll() {
    return this.taskService.findAll(TaskMSG.FIND_ALL);
  }

  @Query(() => Task, { name: 'FIND_TASK' })
  findOne(@Args('id') id: number) {
    return this.taskService.findOne(TaskMSG.FIND_ONE, id);
  }

  @Query(() => [Task], { name: 'FIND_TASK_BY_PROJECT' })
  findTasksByProjectId(@Args('project') project: number){
    return this.taskService.findTasksByProjectId(TaskMSG.FIND_BY_PROJECT, project);
  }

  @Mutation(() => Task, { name: 'UPDATE_TASK' })
  updateTask(@Args('id') id:number, @Args('updateTaskDto') updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(TaskMSG.UPDATE, id, updateTaskDto);
  }

  @Mutation(() => Task, { name: 'DELETE_TASK' })
  removeTask(@Args('id') id: number) {
    return this.taskService.remove(TaskMSG.DELETE, id);
  }
}