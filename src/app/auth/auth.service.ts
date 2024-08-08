import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AppConfig } from '../config/types';
import { UserService } from '../user/user.service';
import { hashPassword } from '../user/utils';

import { AuthPayload } from './dto/auth-payload';

@Injectable()
export class AuthService {
  constructor(
    @Inject('Config') private config: AppConfig,
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async authenticate(login: string, password: string): Promise<string | null> {
    const user = await this.userService.getByLogin(login);
    if (!user) {
      return null;
    }

    const { passwordSalt } = this.config.db;
    if (hashPassword(password, passwordSalt) !== user.password) {
      return null;
    }

    const authPayload: AuthPayload = { id: user.id, login: user.login };
    return this.jwtService.signAsync(authPayload);
  }
}
