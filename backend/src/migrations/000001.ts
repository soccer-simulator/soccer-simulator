import { BOOLEAN, DATE, INTEGER, STRING } from 'sequelize';

import { MigrationOptions } from '../app/cli/commands/types';
import { hashPassword } from '../app/user/utils';

export async function up(options: MigrationOptions): Promise<void> {
  const { config, queryInterface } = options.context;
  const { passwordSalt } = config.db;

  await queryInterface.createTable('user', {
    created_at: { type: DATE, allowNull: false },
    updated_at: { type: DATE },
    id: { type: INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    login: { type: STRING, allowNull: false },
    password: { type: STRING, allowNull: false },
    admin: { type: BOOLEAN, allowNull: false }
  });

  await queryInterface.bulkInsert('user', [
    {
      created_at: new Date(),
      updated_at: new Date(),
      login: 'admin',
      password: hashPassword('admin', passwordSalt),
      admin: true
    }
  ]);
}

export async function down(options: MigrationOptions): Promise<void> {
  const { queryInterface } = options.context;
  await queryInterface.dropTable('user');
}
