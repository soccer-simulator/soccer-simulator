import { AppConfig } from './types';

export const defaultAppConfig: AppConfig = {
  db: {
    host: 'localhost',
    port: 5432,
    name: 'soccer-simulator',
    user: 'soccer-simulator',
    password: 'postgres',
    passwordSalt: 'ice-ice-baby'
  }
};
