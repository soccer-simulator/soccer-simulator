import { resolve } from 'path';

import { Provider } from '@nestjs/common';
import { readJson } from 'fs-extra';

import { fileExists } from '../../utils/fs';

import { AppConfig, AppConfigDb } from './types';
import { AppConfigZod } from './zod';

export const configProvider: Provider = {
  provide: 'Config',
  useFactory: async (): Promise<AppConfig | undefined> => {
    const configFilePath = resolve(__dirname, '../../config.json');
    if (!(await fileExists(configFilePath))) {
      return undefined;
    }

    const config = await readJson(configFilePath);
    const result = AppConfigZod.safeParse(config);
    if (!result.success) {
      return undefined;
    }

    const { data: typedConfig } = result;
    const { db } = typedConfig;

    const {
      DB_HOST: host,
      DB_PORT: port,
      DB_DATABASE: name,
      DB_USER: user,
      DB_PASSWORD: password,
      DB_PASSWORD_SALT: passwordSalt
    } = process.env;

    if (host !== undefined) {
      Object.assign<AppConfigDb, Pick<AppConfigDb, 'host'>>(db, { host });
    }
    if (port !== undefined) {
      Object.assign<AppConfigDb, Pick<AppConfigDb, 'port'>>(db, { port: Number(port) });
    }
    if (name !== undefined) {
      Object.assign<AppConfigDb, Pick<AppConfigDb, 'name'>>(db, { name });
    }
    if (user !== undefined) {
      Object.assign<AppConfigDb, Pick<AppConfigDb, 'user'>>(db, { user });
    }
    if (password !== undefined) {
      Object.assign<AppConfigDb, Pick<AppConfigDb, 'password'>>(db, { password });
    }
    if (passwordSalt !== undefined) {
      Object.assign<AppConfigDb, Pick<AppConfigDb, 'passwordSalt'>>(db, { passwordSalt });
    }

    return typedConfig;
  }
};
