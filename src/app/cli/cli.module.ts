import { Module } from '@nestjs/common';

import { ConfigModule } from '../config/config.module';
import { DatabaseModule } from '../database/database.module';
import { SwaggerModule } from '../swagger/swagger.module';

import { ConfigCommand } from './commands/config-command';
import { DataCommand } from './commands/data-command';
import { MigrateCommand } from './commands/migrate-command';
import { SwaggerCommand } from './commands/swagger-command';

@Module({
  imports: [ConfigModule, DatabaseModule, SwaggerModule],
  providers: [ConfigCommand, DataCommand, MigrateCommand, SwaggerCommand]
})
export class CliModule {}
