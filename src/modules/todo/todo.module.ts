import { Module } from '@nestjs/common';
import { TodoController } from 'src/modules/todo/todo.controller';
import { TodoService } from './todo.service';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
