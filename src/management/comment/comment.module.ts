import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentResolver } from './comment.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
  providers: [CommentService, CommentResolver],
  controllers: []
})
export class CommentModule {}
