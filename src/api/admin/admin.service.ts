import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAccountDTO } from '../../dtos/account/create-account.dto';
import { readDbFile } from '../../utils/files/read-db-file.util';
import { writeDbFile } from '../../utils/files/write-db-file.util';
import { readdirSync } from 'fs';
import { deleteDbFile } from '../../utils/files/delete-db-file.util';
import { processAccountCode } from '../../utils/text/process-account-code.util';

@Injectable()
export class AdminService {
  createAccount(account: CreateAccountDTO) {
    const code = processAccountCode(account.code);

    const { exists } = readDbFile(code, 'users');

    if (exists) throw new BadRequestException('Duplicated user');

    writeDbFile(code, 'users', account);
  }

  getAllAccounts() {
    const files = readdirSync('/app-data/users');
    return files.map(
      (filePath) => readDbFile<{ code: string }>(filePath, 'users').data.code,
    );
  }

  deleteAccount(accountCode: string) {
    const { exists } = readDbFile(accountCode, 'users');

    if (!exists) throw new NotFoundException();

    deleteDbFile(accountCode, 'users');
  }
}
