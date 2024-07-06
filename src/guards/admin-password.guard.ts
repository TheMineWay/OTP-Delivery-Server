import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class AdminPasswordGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest();
    const adminPassword = request.headers['x-admin-password'] as string;

    if (!adminPassword) {
      throw new UnauthorizedException('Missing x-admin-password header');
    }

    const hashedPassword = CryptoJS.SHA3(adminPassword).toString(
      CryptoJS.enc.Hex,
    );
    const envHashedPassword = process.env.ADMIN_PASSWORD_HASH;

    if (hashedPassword !== envHashedPassword) {
      throw new UnauthorizedException('Invalid admin password');
    }

    return true;
  }
}
