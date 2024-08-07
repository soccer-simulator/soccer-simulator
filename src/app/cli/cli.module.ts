import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { SwaggerModule } from '../swagger/swagger.module';

import { DataCommand } from './commands/data-command';
import { MigrateCommand } from './commands/migrate-command';
import { SwaggerCommand } from './commands/swagger-command';

@Module({
  imports: [DatabaseModule, SwaggerModule],
  providers: [DataCommand, MigrateCommand, SwaggerCommand]
})
export class CliModule {}
