import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAccountDTO } from '../../dtos/account/create-account.dto';
import { readDbFile } from '../../utils/files/read-db-file.util';
import { writeDbFile } from '../../utils/files/write-db-file.util';

@Injectable()
export class AdminService {
  createAccount(account: CreateAccountDTO) {
    const { exists } = readDbFile(account.code, 'users');

    if (exists) throw new BadRequestException('Duplicated user');

    writeDbFile(account.code, 'users', account);
  }
}
