import { Get, Controller } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

import { Public } from './auth/public';

@Controller()
export class AppController {
  constructor() {}

  @ApiOperation({
    operationId: 'version',
    description: 'Get application name and version'
  })
  @ApiOkResponse({ description: 'Application name and version' })
  @Public()
  @Get()
  version(): string {
    return 'Soccer Simulator';
  }
}
