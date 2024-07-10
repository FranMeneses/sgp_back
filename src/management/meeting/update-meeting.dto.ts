import { PartialType } from '@nestjs/mapped-types';
import { CreateMeetingDto } from './create-meeting.dto';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UpdateMeetingDto extends PartialType(CreateMeetingDto) {}