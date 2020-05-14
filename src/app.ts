import 'reflect-metadata';

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { initializeTransactionalContext } from 'typeorm-transactional-cls-hooked';

import AppModule from './app.module';

async function bootstrap() {
  initializeTransactionalContext(); // Initialize cls-hooked
  const port = 3030;
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
}
bootstrap();
