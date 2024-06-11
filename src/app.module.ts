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
import { ParticipantModule } from './management/participant/participant.module';
import { GraphicsModule } from './graphics/graphics.module';
import { StatusModule } from './management/status/status.module';
import { ArchiveModule } from './management/archive/archive.module';
import { VersionModule } from './management/version/version.module';
import { NotificacionModule } from './management/notificacion/notificacion.module';
import { TeamParticipantModule } from './management/team-participant/team-participant.module';

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
    ParticipantModule,
    GraphicsModule,
    StatusModule,
    ArchiveModule,
    VersionModule,
    NotificacionModule,
    TeamParticipantModule,
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}