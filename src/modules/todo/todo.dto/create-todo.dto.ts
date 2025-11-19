import { IsString, IsNumber, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  timeToComplete: number;

  @IsNumber()
  priority: number;

  @IsBoolean()
  complete: boolean;
}
