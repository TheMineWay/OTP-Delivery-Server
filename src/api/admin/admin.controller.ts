import {
  Body,
  Controller,
  Delete,
  Get,
  NotImplementedException,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AdminPasswordGuard } from '../../guards/admin-password.guard';
import { CreateAccountDTO } from '../../dtos/account/create-account.dto';

@UseGuards(AdminPasswordGuard)
@Controller('admin')
export class AdminController {
  @Post('account')
  async createAccount(@Body() accountData: CreateAccountDTO) {
    throw new NotImplementedException();
  }

  @Delete('account/:code')
  async deleteAccount(@Param('code') accountCode: string) {
    throw new NotImplementedException();
  }

  @Get('accounts')
  async getAccountsList() {
    throw new NotImplementedException();
  }
}
