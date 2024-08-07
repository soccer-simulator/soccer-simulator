import { Provider } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

export const sequelizeProvider: Provider = {
  provide: 'Sequelize',
  useFactory: async () => {
    const { DB_HOST: host, DB_PORT: port, DB_NAME: database, DB_USER: username, DB_PASSWORD: password } = process.env;

    const sequelize = new Sequelize({
      dialect: 'postgres',
      host,
      port: port !== undefined ? Number(port) : undefined,
      database,
      username,
      password
    });

    await sequelize.authenticate();

    return sequelize;
  }
};
