import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import * as dotenv from 'dotenv';
import { AppService } from './app.service';
import { ChatGateway } from './communications/communications.gateway';
import { ProjectModule } from './management/project/project.module';
import { TeamModule } from './management/team/team.module';
import { TaskModule } from './management/task/task.module';
import { CommentModule } from './management/comment/comment.module';
import { ResourceModule } from './management/resource/resource.module';
import { MeetingModule } from './management/meeting/meeting.module';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [],
      synchronize: true,
      ssl: process.env.DB_SSL === 'true',
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
    ChatGateway,
    ProjectModule,
    TeamModule,
    TaskModule,
    CommentModule,
    ResourceModule,
    MeetingModule,
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}