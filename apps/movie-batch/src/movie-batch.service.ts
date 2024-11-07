import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieBatchService {
  getHello(): string {
    return 'Hello World!-batch';
  }
}
