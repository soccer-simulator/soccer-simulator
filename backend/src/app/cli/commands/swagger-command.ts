import { resolve } from 'path';

import { NestFactory } from '@nestjs/core';
import { ensureDir, writeFile } from 'fs-extra';
import { Command, CommandRunner, Option } from 'nest-commander';

import { directoryExists } from '../../../utils/fs';
import { AppModule } from '../../app.module';
import { SwaggerService } from '../../swagger/swagger.service';

const SWAGGER_FILE_NAME = 'swagger.json';

interface SwaggerCommandOptions {
  output: string;
}

@Command({
  name: 'swagger',
  description: 'generate swagger.json API specification file'
})
export class SwaggerCommand extends CommandRunner {
  constructor(private swaggerService: SwaggerService) {
    super();
  }

  @Option({
    flags: '-o --output [output]',
    description: 'output directory path'
  })
  parseOutput(output: string): string {
    return output;
  }

  async run(params: Array<string>, options?: SwaggerCommandOptions): Promise<void> {
    const { output = process.cwd() } = options || {};

    const outputDirectoryPath = resolve(output);
    if (!(await directoryExists(outputDirectoryPath))) {
      try {
        await ensureDir(outputDirectoryPath);
      } catch (e) {
        console.error(`Unable to create output directory "${outputDirectoryPath}"`);
        process.exit(1);
        return;
      }
    }

    const app = await NestFactory.create(AppModule);
    const document = await this.swaggerService.create(app);

    const outputFilePath = resolve(outputDirectoryPath, SWAGGER_FILE_NAME);
    try {
      await writeFile(outputFilePath, JSON.stringify(document, null, 2));
    } catch (e) {
      console.log(e);
      console.error(`Unable to write output file "${outputFilePath}"`);
      process.exit(2);
      return;
    }

    await app.close();

    console.info(`Output file "${outputFilePath}" has been generated`);
  }
}
