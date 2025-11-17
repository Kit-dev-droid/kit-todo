import { Controller, Post } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Post()
  create(): string {
    return 'This will create a todo list item right kyle';
  }
}
