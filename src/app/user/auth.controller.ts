import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { AuthRequest } from './dto/auth-request';
import { AuthResponse } from './dto/auth-response';

@ApiTags('auth')
@Controller('user/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({
    operationId: 'authenticate',
    description: 'Authenticate a user'
  })
  @ApiCreatedResponse({
    type: AuthResponse,
    description: 'User is authenticated successfully'
  })
  @Post()
  authenticate(@Body() request: AuthRequest): AuthResponse {
    const { login, password } = request;
    const token = this.authService.authenticate(login, password);
    return { token };
  }
}
