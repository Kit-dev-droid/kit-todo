import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  timeToComplete: number;

  @IsNumber()
  priority: number;
}
