import * as crypto from 'crypto';
if (!globalThis.crypto) {
  (globalThis as any).crypto = crypto;
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './helper';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter());

  app.enableCors({
    origin: ['https://www.thevisacity.com', 'https://thevisacity.com', 'https://api.thevisacity.com', 'http://localhost:3001', 'http://localhost:3000'],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With'],
    credentials: true,
  });

  await app.listen(4000)
  // await app.listen(3000, '0.0.0.0');
}

bootstrap();
