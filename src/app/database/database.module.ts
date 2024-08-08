import { Inject, Module, OnModuleDestroy } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

import { ConfigModule } from '../config/config.module';

import { sequelizeProvider } from './sequelize.provider';

@Module({
  imports: [ConfigModule],
  exports: [sequelizeProvider],
  providers: [sequelizeProvider]
})
export class DatabaseModule implements OnModuleDestroy {
  constructor(@Inject('Sequelize') private sequelize: Sequelize) {}

  async onModuleDestroy(): Promise<void> {
    await this.sequelize.close();
  }
}
