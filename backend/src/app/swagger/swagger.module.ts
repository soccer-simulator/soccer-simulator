import { Module } from '@nestjs/common';

import { SwaggerService } from './swagger.service';

@Module({
  exports: [SwaggerService],
  providers: [SwaggerService]
})
export class SwaggerModule {}
