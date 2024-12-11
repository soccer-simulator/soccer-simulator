import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { AuthParam } from '../auth/auth.param';
import { AuthPayload } from '../auth/dto/auth-payload';

@ApiTags('user')
@Controller('user')
export class UserController {
  @ApiOperation({
    operationId: 'information',
    description: 'Get authenticated user info'
  })
  @ApiOkResponse()
  @Get()
  @HttpCode(HttpStatus.OK)
  info(@AuthParam() authPayload: AuthPayload): AuthPayload {
    return authPayload;
  }
}
