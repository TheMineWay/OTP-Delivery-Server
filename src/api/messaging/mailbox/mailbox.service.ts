import { Injectable, NotFoundException } from '@nestjs/common';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { readDbFile } from '../../../utils/files/read-db-file.util';
import { SendMessageDTO } from '../../../dtos/messaging/send-message.dto';
import { writeDbFile } from '../../../utils/files/write-db-file.util';
import { deleteDbFile } from '../../../utils/files/delete-db-file.util';
import { MessageModel } from '../../../models/messaging/message.model';

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
    return files
      .map((file) => ({
        id: file,
        date: new Date(
          readDbFile<MessageModel>(`${userCode}/${file}`, 'inbox').data.date,
        ),
      }))
      .sort(({ date: a }, { date: b }) => (a < b ? 1 : -1));
  }

  readMessage(userCode: string, messageCode: string) {
    this.checkUserDir(userCode);

    const { exists, data } = readDbFile(`${userCode}/${messageCode}`, 'inbox');

    if (!exists) throw new NotFoundException();

    return data;
  }

  sendMessage(from: string, messageData: SendMessageDTO) {
    this.checkUserDir(messageData.to);

    writeDbFile(Date.now().toString(), `inbox/${messageData.to}`, {
      ...messageData,
      from,
      date: new Date(),
    });
  }

  deleteMessage(userCode: string, messageId: string) {
    const { exists } = readDbFile(`${userCode}/${messageId}`, 'inbox');

    if (!exists) throw new NotFoundException();

    deleteDbFile(`${userCode}/${messageId}`, 'inbox');
  }
}
