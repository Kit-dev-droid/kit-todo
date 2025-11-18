import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './todo.dto/create-todo.dto';

@Injectable()
export class TodoService {
  create(createTodoDto: CreateTodoDto) {
    return {
      message: 'Received DTO',
      data: createTodoDto,
    };
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
