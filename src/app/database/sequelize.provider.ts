import { Provider } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

import { AppConfig } from '../config/types';

export const sequelizeProvider: Provider = {
  provide: 'Sequelize',
  inject: ['Config'],
  useFactory: async (appConfig?: AppConfig) => {
    const { db } = appConfig || {};
    const { host, port, name: database, user: username, password } = db || {};
    const sequelize = new Sequelize({ dialect: 'postgres', host, port, database, username, password });
    await sequelize.authenticate();
    return sequelize;
  }
};
