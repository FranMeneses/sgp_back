import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Notification } from './notification.entity';
import { NotificationResolver } from './notification.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Notification])],
  controllers: [],
  providers: [NotificationService, NotificationResolver],
})
export class NotificationModule {}
