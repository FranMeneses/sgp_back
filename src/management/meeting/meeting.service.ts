import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Meeting } from './meeting.entity';
import { CreateMeetingDto } from './create-meeting.dto';
import { UpdateMeetingDto } from './update-meeting.dto';

@Injectable()
export class MeetingService {
    constructor(
        @InjectRepository(Meeting)
        private meetingRepository: Repository<Meeting>,
    ) {}

    async create(action: string, createMeetingDto: CreateMeetingDto): Promise<Meeting> {
        try {
            const newMeeting = this.meetingRepository.create(createMeetingDto);
            return await this.meetingRepository.save(newMeeting);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async findAll(action: string) {
        return await this.meetingRepository.find();
    }

    async findOne(action: string, id: number) {
        return await this.meetingRepository.findOne({ where: { id } });
    }

    async update(action: string, id: number, updateMeetingDto: UpdateMeetingDto): Promise<UpdateResult> {
        try {
            const updatedMeeting = this.meetingRepository.update(id, updateMeetingDto);
            return await updatedMeeting;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async remove(action: string, id: number) {
        try {
            const deletedMeeting = this.meetingRepository.delete(id);
            return await deletedMeeting;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async findMeetingByDate(action: string, date: Date) {
        return await this.meetingRepository.find({ where: { date } });
    }
}