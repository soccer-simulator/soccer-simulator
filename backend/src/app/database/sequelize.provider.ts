import { Provider } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

import { AppConfig } from '../config/types';

import { User } from './models/user';

export const sequelizeProvider: Provider = {
  provide: 'Sequelize',
  inject: ['Config'],
  useFactory: (appConfig: AppConfig) => {
    const { db } = appConfig;
    const { host, port, name: database, user: username, password } = db;

    const sequelize = new Sequelize({
      dialect: 'postgres',
      host,
      port,
      database,
      username,
      password,
      define: {
        freezeTableName: true,
        underscored: true
      }
    });

    sequelize.addModels([User]);

    return sequelize;
  }
};
