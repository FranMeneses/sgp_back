import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Comment } from './comment.entity';
import { CreateCommentDto } from './create-comment.dto';
import { UpdateCommentDto } from './update-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async create(action: string, createCommentDto: CreateCommentDto): Promise<Comment> {
    try {
      const newComment = this.commentRepository.create(createCommentDto);
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
  
  async update(action: string, id: number, updateCommentDto: UpdateCommentDto): Promise<UpdateResult> {
    try {
      const updatedComment = this.commentRepository.update(id, updateCommentDto);
      return await updatedComment;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(action: string, id: number) {
    try {
      const deletedComment = this.commentRepository.delete(id);
      return await deletedComment;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}