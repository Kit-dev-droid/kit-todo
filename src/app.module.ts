import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './modules/todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDo } from './modules/todo/todo.entity';

@Module({
  imports: [
    TodoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [ToDo],
      synchronize: true, //make this false for production data as it can make you lose data
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
