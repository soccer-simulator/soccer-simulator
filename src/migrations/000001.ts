import { BOOLEAN, DATE, INTEGER, STRING } from 'sequelize';

import { MigrationOptions } from './types';

export async function up(options: MigrationOptions): Promise<void> {
  const { context: queryInterface } = options;
  await queryInterface.createTable('user', {
    created_at: { type: DATE, allowNull: false },
    updated_at: { type: DATE },
    id: { type: INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    login: { type: STRING, allowNull: false },
    password: { type: STRING, allowNull: false },
    admin: { type: BOOLEAN, allowNull: false }
  });
}

export async function down(options: MigrationOptions): Promise<void> {
  const { context: queryInterface } = options;
  await queryInterface.dropTable('user');
}
