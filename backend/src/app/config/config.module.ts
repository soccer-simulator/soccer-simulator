import { Module } from '@nestjs/common';

import { configProvider } from './config.provider';

@Module({
  exports: [configProvider],
  providers: [configProvider]
})
export class ConfigModule {}
