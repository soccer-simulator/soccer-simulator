import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';

import { ConfigModule } from '../config/config.module';
import { AppConfig } from '../config/types';
import { UserModule } from '../user/user.module';

import { AuthController } from './auth.controller';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: ['Config'],
      useFactory: async (config: AppConfig) => {
        const { secret } = config.auth;
        return { secret };
      }
    }),
    UserModule
  ],
  providers: [AuthService, { provide: APP_GUARD, useClass: AuthGuard }],
  controllers: [AuthController]
})
export class AuthModule {}
