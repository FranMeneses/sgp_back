import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Comment } from './comment.entity';
import { CreateCommentDto } from './create-comment.dto';
import { UpdateCommentDto } from './update-comment.dto';
import { ProjectService } from '../project/project.service';
import { TaskService } from '../task/task.service';
import { ParticipantMSG, ProjectMSG, TaskMSG } from 'src/constants';
import { ParticipantService } from '../participant/participant.service';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
    private projectRepository: ProjectService,
    private taskRepository: TaskService,
    private participantRepository: ParticipantService,
  ) {}

  async create(action: string, createCommentDto: CreateCommentDto): Promise<Comment> {
    try {
      const newComment = this.commentRepository.create(createCommentDto);
      const project = await this.projectRepository.findOne(ProjectMSG.FIND_ONE, createCommentDto.projectId);
      const task = await this.taskRepository.findOne(TaskMSG.FIND_ONE, createCommentDto.taskId);
      const participant = await this.participantRepository.findOne(ParticipantMSG.FIND_ONE, createCommentDto.participantId);

      newComment.project = project;
      newComment.task = task;
      newComment.participant = participant;
      
      return await this.commentRepository.save(newComment);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(action: string) {
    return await this.commentRepository.find();
  }

  async findOne(action: string, id: number) {
    return await this.commentRepository.findOne({ where: { id } });
  }
  
  async update(action: string, id: number, updateCommentDto: UpdateCommentDto): Promise<Comment> {
    try {
      await this.commentRepository.update(id, updateCommentDto);
      return await this.commentRepository.findOne({ where: { id } });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(action: string, id: number) {
    try {
      const comment = await this.commentRepository.findOne({ where: { id } });
      if (!comment) {
        throw new BadRequestException('Comment not found');
      }
      await this.commentRepository.delete(id);
      return comment;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findCommentsByTask(action: string, id: number) {
    try {
      return await this.commentRepository.find({ where: { taskId: id } });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}