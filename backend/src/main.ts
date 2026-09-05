import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.enableCors({
    origin: [
    'http://localhost:5173',
    'https://your-app-name.vercel.app', // we'll fill this in after deploying
  ], // your Vite dev server
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
