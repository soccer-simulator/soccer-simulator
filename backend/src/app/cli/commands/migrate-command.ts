import { resolve } from 'path';

import { Inject, Injectable } from '@nestjs/common';
import { Command, CommandRunner, Option } from 'nest-commander';
import { Sequelize } from 'sequelize-typescript';
import { SequelizeStorage, Umzug } from 'umzug';

import { directoryExists } from '../../../utils/fs';
import { AppConfig } from '../../config/types';

import { MigrationContext } from './types';

interface MigrateCommandOptions {
  down?: boolean;
}

@Injectable()
@Command({ name: 'migrate', description: 'apply database migrations' })
export class MigrateCommand extends CommandRunner {
  constructor(
    @Inject('Config') private config: AppConfig,
    @Inject('Sequelize') private sequelize: Sequelize
  ) {
    super();
  }

  @Option({
    flags: '-d, --down [down]',
    description: 'revert migration'
  })
  parseDown(down: string): boolean {
    return Boolean(down);
  }

  async run(_params: Array<string>, options?: MigrateCommandOptions): Promise<void> {
    const { down = false } = options || {};

    const migrationsDirectoryPath = resolve(__dirname, '../../../migrations');

    if (!(await directoryExists(migrationsDirectoryPath))) {
      console.error(`Migrations directory "${migrationsDirectoryPath}" doesn't exist`);
      process.exit(1);
      return;
    }

    const storage = new SequelizeStorage({ sequelize: this.sequelize });

    const umzug = new Umzug<MigrationContext>({
      storage,
      context: { config: this.config, queryInterface: this.sequelize.getQueryInterface() },
      migrations: { glob: `${migrationsDirectoryPath}/*[0-9].js` },
      logger: console
    });

    if (down) {
      await umzug.down();
    } else {
      await umzug.up();
    }
  }
}
