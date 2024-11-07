import { Test, TestingModule } from '@nestjs/testing';
import { MovieBatchController } from './movie-batch.controller';
import { MovieBatchService } from './movie-batch.service';

describe('MovieBatchController', () => {
  let movieBatchController: MovieBatchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MovieBatchController],
      providers: [MovieBatchService],
    }).compile();

    movieBatchController = app.get<MovieBatchController>(MovieBatchController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(movieBatchController.getHello()).toBe('Hello World!');
    });
  });
});
