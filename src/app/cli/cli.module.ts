import { Module } from '@nestjs/common';

import { SwaggerModule } from '../swagger/swagger.module';

import { DataCommand } from './commands/data-command';
import { SwaggerCommand } from './commands/swagger-command';

@Module({
  imports: [SwaggerModule],
  providers: [DataCommand, SwaggerCommand],
})
export class CliModule {}
