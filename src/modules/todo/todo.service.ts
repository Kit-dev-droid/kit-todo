import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './todo.dto/create-todo.dto';
import { v4 as uuid } from 'uuid';

export interface Todo {
  id: string;
  name: string;
  timeToComplete: number;
  priority: number;
  complete: boolean;
}

@Injectable()
export class TodoService {
  todoItems: Todo[] = [];
  create(createTodoDto: CreateTodoDto) {
    const todo = {
      id: uuid(),
      name: createTodoDto.name,
      timeToComplete: createTodoDto.timeToComplete,
      priority: createTodoDto.priority,
      complete: createTodoDto.complete,
    };

    this.todoItems.push(todo);

    return {
      message: 'Received DTO',
      data: todo,
    };
  }

  update(): string {
    return 'this will update an existing record';
  }

  delete(id) {
    this.todoItems = this.todoItems.filter((item) => item.id !== id);
    return {
      message: 'Deleted',
      data: this.todoItems,
    };
  }

  findAll() {
    return {
      message: 'Received DTO',
      data: this.todoItems,
    };
  }
}
