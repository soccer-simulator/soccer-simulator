import { Command, CommandRunner } from 'nest-commander';

import { dataSource } from './const';

@Command({
  name: 'data',
  description: 'initialize/synchronize data'
})
export class DataCommand extends CommandRunner {
  async run(): Promise<void> {
    const response = await fetch(dataSource, { method: 'POST' });
    const json = await response.json();
    console.log(json['InternationalData']);
    console.log(Object.keys(json));
  }
}
