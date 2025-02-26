import { config } from '@dotenvx/dotenvx';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';
import { SwaggerService } from './app/swagger/swagger.service';
import { APP_CONVENTION } from './const';

config({ convention: APP_CONVENTION });

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const swaggerService = app.get(SwaggerService);
  const document = swaggerService.create(app);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

(async () => {
  await bootstrap();
})();
