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
import { AdminService } from './admin.service';

@UseGuards(AdminPasswordGuard)
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('account')
  async createAccount(@Body() accountData: CreateAccountDTO) {
    this.adminService.createAccount(accountData);
  }

  @Delete('account/:code')
  async deleteAccount(@Param('code') accountCode: string) {
    throw new NotImplementedException();
  }

  @Get('accounts')
  async getAccountsList() {
    return this.adminService.getAllAccounts();
  }
}
