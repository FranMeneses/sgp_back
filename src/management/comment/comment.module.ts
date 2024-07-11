import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentResolver } from './comment.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
import { TaskModule } from '../task/task.module';
import { ProjectModule } from '../project/project.module';
import { ParticipantModule } from '../participant/participant.module';

@Module({
  imports: [TypeOrmModule.forFeature([Comment]), ProjectModule, TaskModule, ParticipantModule],
  providers: [CommentService, CommentResolver],
  controllers: []
})
export class CommentModule {}
