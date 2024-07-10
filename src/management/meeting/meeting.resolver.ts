import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MeetingService } from './meeting.service';
import { Meeting } from './meeting.entity';
import { CreateMeetingDto } from './create-meeting.dto';
import { UpdateMeetingDto } from './update-meeting.dto';
import { MeetingMSG } from 'src/constants';

@Resolver(() => Meeting)
export class MeetingResolver {
  constructor(private readonly meetingService: MeetingService) {}

  @Mutation(() => Meeting, { name: 'CREATE_MEETING' })
  createMeeting(@Args('createMeetingDto') createMeetingDto: CreateMeetingDto) {
    return this.meetingService.create(MeetingMSG.CREATE, createMeetingDto);
  }

  @Query(() => [Meeting], { name: 'FIND_MEETINGS' })
  findAll() {
    return this.meetingService.findAll(MeetingMSG.FIND_ALL);
  }

  @Query(() => Meeting, { name: 'FIND_MEETING' })
  findOne(@Args('id') id: number) {
    return this.meetingService.findOne(MeetingMSG.FIND_ONE, id);
  }

  @Mutation(() => Meeting, { name: 'UPDATE_MEETING' })
  updateMeeting(@Args('id') id:number, @Args('updateMeetingDto') updateMeetingDto: UpdateMeetingDto) {
    return this.meetingService.update(MeetingMSG.UPDATE, id, updateMeetingDto);
  }

  @Mutation(() => Meeting, { name: 'DELETE_MEETING' })
  removeMeeting(@Args('id') id: number) {
    return this.meetingService.remove(MeetingMSG.DELETE, id);
  }
}