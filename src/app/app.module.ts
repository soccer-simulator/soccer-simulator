import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { SwaggerModule } from './swagger/swagger.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [SwaggerModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
