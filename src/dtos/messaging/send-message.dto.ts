import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { PAGE_ID_LENGTH } from '../../constants/otp/page-id-length.constant';
import { MAX_MESSAGE_LENGTH } from '../../constants/messaging/max-message-length.constant';

export class SendMessageDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(32)
  to: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(MAX_MESSAGE_LENGTH)
  message: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(PAGE_ID_LENGTH)
  @MaxLength(PAGE_ID_LENGTH)
  pageId: string;
}
