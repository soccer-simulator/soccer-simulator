import { Get, Controller } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor() {}

  @ApiOperation({
    operationId: 'version',
    description: 'Get application name and version'
  })
  @ApiOkResponse({ description: 'Application name and version' })
  @Get()
  version(): string {
    return 'Soccer Simulator';
  }
}
