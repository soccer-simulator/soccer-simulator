import 'ts-node/register';

import { config } from '@dotenvx/dotenvx';
import { CommandFactory } from 'nest-commander';

import { CliModule } from './app/cli/cli.module';

config();

async function bootstrap() {
  await CommandFactory.run(CliModule, ['warn', 'error']);
}

(async () => {
  await bootstrap();
})();
