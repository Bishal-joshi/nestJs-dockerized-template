import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './config/data-source';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  await AppDataSource.initialize(); // Ensure the database is initialized before starting the app
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // Just like serializers in django, API input validation
  await app.listen(3000);
}
bootstrap();
