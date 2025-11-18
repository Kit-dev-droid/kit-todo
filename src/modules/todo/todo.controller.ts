import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Post()
  create(): string {
    return this.todoService.create();
  }

  @Patch(':id')
  update(): string {
    return this.todoService.update();
  }

  @Delete(':id')
  delete(): string {
    return this.todoService.delete();
  }

  @Get()
  findAll(): string {
    return this.todoService.findAll();
  }
}
