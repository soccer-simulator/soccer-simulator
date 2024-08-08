import { ApiProperty } from '@nestjs/swagger';

export class AuthRequest {
  @ApiProperty({ description: 'User login' })
  login: string;

  @ApiProperty({ description: 'User password' })
  password: string;
}
