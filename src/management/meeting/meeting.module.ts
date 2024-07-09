import { Module } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { MeetingResolver } from './meeting.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Meeting } from './meeting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Meeting])],
  providers: [MeetingService, MeetingResolver],
  controllers: []
})
export class MeetingModule {}
