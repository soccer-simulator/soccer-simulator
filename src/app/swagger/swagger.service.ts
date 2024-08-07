import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

export class SwaggerService {
  create(app: INestApplication): OpenAPIObject {
    const documentBuilder = new DocumentBuilder()
      .setTitle('Soccer Simulator')
      .setDescription('Soccer Simulator API')
      .setVersion('0.0.1')
      .build();
    return SwaggerModule.createDocument(app, documentBuilder);
  }
}
