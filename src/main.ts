import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const porta = app.get(ConfigService).get('PORT') || 30000;

  app.enableCors();
  await app.listen(porta);
}

bootstrap();
