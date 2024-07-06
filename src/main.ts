import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { existsSync, mkdirSync } from 'fs';

const createFolders = () => {
  if (!existsSync('/app-data/users')) {
    mkdirSync('/app-data/users');
  }

  if (!existsSync('/app-data/inbox')) {
    mkdirSync('/app-data/inbox');
  }
};

async function bootstrap() {
  createFolders();

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen(3000);
}
bootstrap();
