import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import GraphqlConfigService from './services/gql.service';
import TypeOrmConfigService from './services/db.service';
import UserModule from './modules/user.module';

@Module({
  controllers: [AppController],
  imports: [
    GraphQLModule.forRootAsync({ useClass: GraphqlConfigService }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    UserModule,
  ],
})
export default class AppModule {}
