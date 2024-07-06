import { Module } from '@nestjs/common';
import { MailboxModule } from './mailbox/mailbox.module';

@Module({
  imports: [MailboxModule],
})
export class MessagingModule {}
