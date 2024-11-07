import { Module } from '@nestjs/common';
import { MovieBatchController } from './movie-batch.controller';
import { MovieBatchService } from './movie-batch.service';

@Module({
  imports: [],
  controllers: [MovieBatchController],
  providers: [MovieBatchService],
})
export class MovieBatchModule {}
