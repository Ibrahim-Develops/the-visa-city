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

  const allowedOrigins = [
    'https://thevisacity.com',
    'https://www.thevisacity.com',
    'https://api.thevisacity.com',
    'https://13.61.35.24:3000',
    'https://the-visa-city-i5o6juesv-muhammad-ibrahims-projects-834581e1.vercel.app',
  ];

  const allowedHeaders = [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Authentication',
    'Access-Control-Allow-Credentials',
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Methods',
    'Access-Control-Allow-Origin',
    'User-Agent',
    'Referer',
    'Accept-Encoding',
    'Accept-Language',
    'Access-Control-Request-Headers',
    'Cache-Control',
    'Pragma',
    'Authorization'
  ];

  app.enableCors({
    origin: allowedOrigins,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'UPDATE', 'OPTIONS'],
    allowedHeaders: allowedHeaders,
    credentials: true,
  });

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
