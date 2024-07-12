import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Notification } from './notification.entity';
import { CreateNotificationDto } from './create-notification.dto';
import { UpdateNotificationDto } from './update-notification.dto';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private notificationRepository: Repository<Notification>,
  ) {}

  async create(action: string, createNotificationDto: CreateNotificationDto): Promise<Notification> {
    try {
      const newNotification = this.notificationRepository.create(createNotificationDto);
      return await this.notificationRepository.save(newNotification);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(action: string) {
    return await this.notificationRepository.find();
  }

  async findOne(action: string, id: number) {
    return await this.notificationRepository.findOne({ where: { id } });
  }
  
  async update(action: string, id: number, updateNotificationDto: UpdateNotificationDto): Promise<Notification> {
    try {
      await this.notificationRepository.update(id, updateNotificationDto);
      return await this.notificationRepository.findOne({ where: { id } });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(action: string, id: number) {
    try {
      const notification = await this.notificationRepository.findOne({ where: { id } });
      if (!notification) {
        throw new BadRequestException('Notification not found');
      }
      await this.notificationRepository.delete(id);
      return notification;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}