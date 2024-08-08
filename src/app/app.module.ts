import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { SwaggerModule } from './swagger/swagger.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule, DatabaseModule, SwaggerModule, UserModule],
  controllers: [AppController]
})
export class AppModule {}
