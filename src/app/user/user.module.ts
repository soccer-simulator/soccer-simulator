import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService]
})
export class UserModule {}
