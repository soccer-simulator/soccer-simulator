import { resolve } from 'path';

import { writeJSON, unlink } from 'fs-extra';
import { Command, CommandRunner, Option } from 'nest-commander';

import { fileExists } from '../../../utils/fs';
import { defaultAppConfig } from '../../config/const';

const distDirectoryPath = resolve(__dirname, '../../../../dist');

type ConfigCommandOptions = {
  overwrite?: boolean;
};

@Command({
  name: 'config',
  description: 'create configuration file in dist directory'
})
export class ConfigCommand extends CommandRunner {
  @Option({
    flags: '-o, --overwrite [overwrite]',
    description: 'overwrite existing configuration file'
  })
  parseOverwrite(overwrite: string): boolean {
    return Boolean(overwrite);
  }

  async run(_params: Array<string>, options?: ConfigCommandOptions): Promise<void> {
    const { overwrite } = options || {};

    const configFilePath = resolve(distDirectoryPath, 'config.json');

    try {
      if (overwrite && (await fileExists(configFilePath))) {
        await unlink(configFilePath);
      }
      if (!(await fileExists(configFilePath))) {
        await writeJSON(configFilePath, defaultAppConfig, { encoding: 'utf-8', spaces: 2 });
        console.log(`Configuration file "${configFilePath}" has been created`);
      } else {
        console.warn(`Configuration file "${configFilePath}" already exists`);
      }
    } catch (_) {
      console.error('Unable to create configuration file');
      process.exit(1);
    }
  }
}
