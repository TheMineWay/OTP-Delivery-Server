import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { Request } from 'express';
import { readDbFile } from '../utils/files/read-db-file.util';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest();
    const user = request.headers['x-user'] as string;
    const password = request.headers['x-password'] as string;

    if (!user || !password) {
      throw new UnauthorizedException('Missing x-user or x-password header');
    }

    if (typeof user !== 'string' || typeof password !== 'string')
      throw new BadRequestException();

    const { exists, data } = readDbFile<{ code: string; passwordHash: string }>(
      user,
      'users',
    );

    if (
      !exists ||
      CryptoJS.SHA3(password).toString(CryptoJS.enc.Hex) !== data.passwordHash
    )
      throw new UnauthorizedException();

    request['user'] = user;
    return true;
  }
}
