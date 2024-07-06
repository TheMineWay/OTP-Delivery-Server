import { Module } from '@nestjs/common';
import { MailboxController } from './mailbox.controller';

@Module({
  controllers: [MailboxController],
})
export class MailboxModule {}
