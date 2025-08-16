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
    'https://the-visa-city-i5o6juesv-muhammad-ibrahims-projects-834581e1.vercel.app',
    'https://thevisacity.com',
    'https://www.thevisacity.com',
    'https://api.thevisacity.com',
  ];

  app.enableCors({
    origin: [
      'https://thevisacity.com',
      'https://www.thevisacity.com',
      'https://api.thevisacity.com',
      'https://the-visa-city-i5o6juesv-muhammad-ibrahims-projects-834581e1.vercel.app'
    ],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  await app.listen(3000, '0.0.0.0');

}
bootstrap();
