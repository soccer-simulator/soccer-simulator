import { QueryInterface } from 'sequelize';

import { AppConfig } from '../../config/types';

export type MigrationContext = {
  config: AppConfig;
  queryInterface: QueryInterface;
};

export type MigrationOptions = {
  context: MigrationContext;
};
