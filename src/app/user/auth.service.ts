import { Injectable } from '@nestjs/common';

import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  authenticate(login: string, password: string): string {
    return `${this.userService.getUser(login)}:${password}`;
  }
}
