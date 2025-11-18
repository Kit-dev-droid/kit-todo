import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  create(): string {
    return 'this will create a new item will it? this works';
  }

  update(): string {
    return 'this will update an existing record';
  }

  delete(): string {
    return 'This will delete the record';
  }

  findAll(): string {
    return 'This will find all the todo items';
  }
}
