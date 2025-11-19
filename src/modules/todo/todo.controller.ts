import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './todo.dto/create-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
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
  findAll() {
    return this.todoService.findAll();
  }
}
