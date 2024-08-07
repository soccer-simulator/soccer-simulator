import { Inject, Module, OnModuleDestroy } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

import { sequelizeProvider } from './sequelize.provider';

@Module({
  exports: [sequelizeProvider],
  providers: [sequelizeProvider]
})
export class DatabaseModule implements OnModuleDestroy {
  constructor(@Inject('Sequelize') private sequelize: Sequelize) {}

  async onModuleDestroy(): Promise<void> {
    await this.sequelize.close();
  }
}
