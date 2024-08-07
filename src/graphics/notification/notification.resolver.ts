import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NotificationService } from './notification.service';
import { Notification } from './notification.entity';
import { CreateNotificationDto } from './create-notification.dto';
import { UpdateNotificationDto } from './update-notification.dto';
import { NotificationMSG } from 'src/constants';

@Resolver(() => Notification)
export class NotificationResolver {
  constructor(private readonly notificationService: NotificationService) {}

  @Mutation(() => Notification, { name: 'CREATE_NOTIFICATION' })
  createNotification(@Args('createNotificationDto') createNotificationDto: CreateNotificationDto) {
    return this.notificationService.create(NotificationMSG.CREATE, createNotificationDto);
  }

  @Query(() => [Notification], { name: 'FIND_NOTIFICATIONS' })
  findAll() {
    return this.notificationService.findAll(NotificationMSG.FIND_ALL);
  }

  @Query(() => Notification, { name: 'FIND_NOTIFICATION' })
  findOne(@Args('id') id: number) {
    return this.notificationService.findOne(NotificationMSG.FIND_ONE, id);
  }

  @Mutation(() => Notification, { name: 'UPDATE_NOTIFICATION' })
  updateNotification(@Args('id') id:number, @Args('updateNotificationDto') updateNotificationDto: UpdateNotificationDto) {
    return this.notificationService.update(NotificationMSG.UPDATE, id, updateNotificationDto);
  }

  @Mutation(() => Notification, { name: 'DELETE_NOTIFICATION' })
  removeNotification(@Args('id') id: number) {
    return this.notificationService.remove(NotificationMSG.DELETE, id);
  }
}