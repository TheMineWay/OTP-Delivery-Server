import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SendMessageDTO } from '../../../dtos/messaging/send-message.dto';
import { MailboxService } from './mailbox.service';
import { User } from '../../../decorators/user.decorator';

@Controller('mailbox')
export class MailboxController {
  constructor(private readonly mailboxService: MailboxService) {}

  @Get('my-index')
  async getMyIndex(@User() userCode: string) {
    return this.mailboxService.readIndexByUserCode(userCode);
  }

  @Get('message/:messageId')
  async getMessageById(
    @User() userCode: string,
    @Param('messageId') messageId: string,
  ) {
    return this.mailboxService.readMessage(userCode, messageId);
  }

  @Post('message')
  async sendMessage(@User() userCode: string, @Body() message: SendMessageDTO) {
    this.mailboxService.sendMessage(userCode, message);
  }

  @Delete('message/messageId')
  async deleteMessageById(
    @User() userCode: string,
    @Param('messageId') messageId: string,
  ) {
    this.mailboxService.deleteMessage(userCode, messageId);
  }
}
