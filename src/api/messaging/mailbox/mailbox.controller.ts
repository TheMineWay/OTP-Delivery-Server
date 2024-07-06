import {
  Body,
  Controller,
  Delete,
  Get,
  NotImplementedException,
  Param,
  Post,
} from '@nestjs/common';
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
  async getMessageById(@Param('messageId') messageId: string) {
    throw new NotImplementedException();
  }

  @Post('message')
  async sendMessage(@Body() message: SendMessageDTO) {
    throw new NotImplementedException();
  }

  @Delete('message/messageId')
  async deleteMessageById(@Param('messageId') messageId: string) {
    throw new NotImplementedException();
  }
}
