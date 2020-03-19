import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    GraphQLModule.forRoot({}),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'nodejsstudy.c1pqggqqcx7t.ap-northeast-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'nodejsstudy1!',
      database: 'food_board',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
