// eslint-disable-next-line prettier/prettier
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ToDo {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  timeToComplete?: number;

  @Column()
  priority?: number;

  @Column({ default: true })
  complete?: boolean;
}
