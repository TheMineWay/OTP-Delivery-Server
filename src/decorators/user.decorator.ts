import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { processAccountCode } from '../utils/text/process-account-code.util';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return processAccountCode(request.user as string);
  },
);
