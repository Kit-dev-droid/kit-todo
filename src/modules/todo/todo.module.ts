import { Module } from '@nestjs/common';
import { TodoController } from 'src/modules/todo/todo.controller';
import { TodoService } from './todo.service';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDo } from './todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ToDo])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {
  constructor(private dataSource: DataSource) {}
}
