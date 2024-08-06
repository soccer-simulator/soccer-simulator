import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataCommand } from './cli/data-command';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DataCommand],
})
export class AppModule {}
