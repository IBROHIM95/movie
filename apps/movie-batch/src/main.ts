import { NestFactory } from '@nestjs/core';
import { MovieBatchModule } from './movie-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(MovieBatchModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
