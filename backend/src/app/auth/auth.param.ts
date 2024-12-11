import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { AuthPayload } from './dto/auth-payload';

export const AuthParam = createParamDecorator((_, context: ExecutionContext): AuthPayload | undefined => {
  const request = context.switchToHttp().getRequest();
  // @ts-ignore
  const user: unknown = request['user'];
  if (!user) {
    return undefined;
  }
  return user as AuthPayload;
});
