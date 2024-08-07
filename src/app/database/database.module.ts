import { Module } from '@nestjs/common';

import { sequelizeProvider } from './sequelize.provider';

@Module({
  providers: [sequelizeProvider],
})
export class DatabaseModule {}
