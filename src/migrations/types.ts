import { QueryInterface } from 'sequelize';

export type MigrationOptions = {
  context: QueryInterface;
};
