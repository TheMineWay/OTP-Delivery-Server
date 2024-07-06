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

@Controller('mailbox')
export class MailboxController {
  @Get('my-index')
  async getMyIndex() {
    throw new NotImplementedException();
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
