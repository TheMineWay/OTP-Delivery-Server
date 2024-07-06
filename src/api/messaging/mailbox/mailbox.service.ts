import { Injectable } from '@nestjs/common';
import { existsSync, mkdirSync, readdirSync } from 'fs';

@Injectable()
export class MailboxService {
  private checkUserDir(userCode: string) {
    if (!existsSync(`/app-data/inbox/${userCode}`)) {
      mkdirSync(`/app-data/inbox/${userCode}`);
    }
  }

  readIndexByUserCode(userCode: string) {
    this.checkUserDir(userCode);

    const files = readdirSync(`/app-data/inbox/${userCode}`);
    return files;
  }
}
