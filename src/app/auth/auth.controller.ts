import { Body, Controller, HttpCode, HttpStatus, Post, UnauthorizedException } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { AuthRequest } from './dto/auth-request';
import { AuthResponse } from './dto/auth-response';
import { Public } from './public';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({
    operationId: 'authenticate',
    description: 'Authenticate a user'
  })
  @ApiOkResponse({
    type: AuthResponse,
    description: 'User is authenticated successfully'
  })
  @ApiUnauthorizedResponse({ description: 'User is not authenticated' })
  @Public()
  @Post()
  @HttpCode(HttpStatus.OK)
  async authenticate(@Body() request: AuthRequest): Promise<AuthResponse> {
    const { login, password } = request;
    const token = await this.authService.authenticate(login, password);
    if (token === null) {
      throw new UnauthorizedException();
    }
    return { token };
  }
}
