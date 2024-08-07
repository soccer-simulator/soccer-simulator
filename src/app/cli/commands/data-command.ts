import { Command, CommandRunner } from 'nest-commander';

@Command({
  name: 'data',
  description: 'initialize/synchronize data'
})
export class DataCommand extends CommandRunner {
  async run(): Promise<void> {
    // TODO: connect to API providing data
    console.log('Fetch teams & players data here...');
  }
}
