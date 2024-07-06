import { Module } from '@nestjs/common';
import { MessagingModule } from './messaging/messaging.module';
import { AdminModule } from './admin/admin.module';

@Module({ imports: [MessagingModule, AdminModule] })
export class ApiModule {}
