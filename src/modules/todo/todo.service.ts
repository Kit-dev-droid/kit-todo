import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  create(): string {
    return 'this will create a new item will it? Yes it will and it works? this works';
  }
}
