import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './todo.dto/create-todo.dto';
import { UpdateTodoDto } from './todo.dto/update-todp.dto';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { ToDo } from './todo.entity';
import { Repository } from 'typeorm';

export interface Todo {
  id: string;
  name: string;
  timeToComplete: number;
  priority: number;
  complete: boolean;
}

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(ToDo)
    private toDoRepository: Repository<ToDo>,
  ) {}

  async create(createTodoDto: CreateTodoDto) {
    const todo = {
      id: uuid(),
      name: createTodoDto.name,
      timeToComplete: createTodoDto.timeToComplete,
      priority: createTodoDto.priority,
      complete: createTodoDto.complete,
    };

    await this.toDoRepository.save(todo);

    return {
      message: 'Received DTO',
      data: todo,
    };
  }

  async update(id: string, updateDto: UpdateTodoDto) {
    await this.toDoRepository.update(id, updateDto);

    const updateToDO = await this.toDoRepository.findOne({ where: { id } });
    return {
      message: 'updated',
      data: updateToDO,
    };
  }

  async delete(id: string): Promise<void> {
    await this.toDoRepository.delete(id);
  }

  findAll(): Promise<ToDo[]> {
    return this.toDoRepository.find();
  }
}
