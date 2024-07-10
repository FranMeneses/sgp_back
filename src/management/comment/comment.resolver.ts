import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { Comment } from './comment.entity';
import { CreateCommentDto } from './create-comment.dto';
import { UpdateCommentDto } from './update-comment.dto';
import { CommentMSG } from 'src/constants';

@Resolver(() => Comment)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @Mutation(() => Comment, { name: 'CREATE_COMMENT' })
  createComment(@Args('createCommentDto') createCommentDto: CreateCommentDto) {
    return this.commentService.create(CommentMSG.CREATE, createCommentDto);
  }

  @Query(() => [Comment], { name: 'FIND_COMMENTS' })
  findAll() {
    return this.commentService.findAll(CommentMSG.FIND_ALL);
  }

  @Query(() => Comment, { name: 'FIND_COMMENT' })
  findOne(@Args('id') id: number) {
    return this.commentService.findOne(CommentMSG.FIND_ONE, id);
  }

  @Mutation(() => Comment, { name: 'UPDATE_COMMENT' })
  updateComment(@Args('id') id:number, @Args('updateCommentDto') updateCommentDto: UpdateCommentDto) {
    return this.commentService.update(CommentMSG.UPDATE, id, updateCommentDto);
  }

  @Mutation(() => Comment, { name: 'DELETE_COMMENT' })
  removeComment(@Args('id') id: number) {
    return this.commentService.remove(CommentMSG.DELETE, id);
  }
}