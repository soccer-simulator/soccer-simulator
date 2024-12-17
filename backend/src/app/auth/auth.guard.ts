import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

import { AppConfig } from '../config/types';

import { AUTH_PUBLIC_ROUTE } from './const';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject('Config') private config: AppConfig,
    private jwtService: JwtService,
    private reflector: Reflector
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const publicRoute = this.reflector.getAllAndOverride<boolean>(AUTH_PUBLIC_ROUTE, [
      context.getHandler(),
      context.getClass()
    ]);

    if (publicRoute) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const [type, token] = request.headers.authorization?.split(' ') ?? [];

    if (type !== 'Bearer') {
      throw new UnauthorizedException();
    }

    try {
      const { secret } = this.config.auth;
      // We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      request['user'] = await this.jwtService.verifyAsync(token, { secret });
    } catch (_) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
