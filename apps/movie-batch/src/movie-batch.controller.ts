import { Controller, Get } from '@nestjs/common';
import { MovieBatchService } from './movie-batch.service';

@Controller()
export class MovieBatchController {
  constructor(private readonly movieBatchService: MovieBatchService) {}

  @Get()
  getHello(): string {
    return this.movieBatchService.getHello();
  }
}
