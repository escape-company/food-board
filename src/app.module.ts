import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import GraphqlConfigService from './services/gql.service';
import TypeOrmConfigService from './services/db.service';
import UserModule from './modules/user.module';
import StoreModule from './modules/store.module';
import FavoritesModule from './modules/favorites.module';
import CategoryModule from './modules/category.module';

@Module({
  controllers: [AppController],
  imports: [
    GraphQLModule.forRootAsync({ useClass: GraphqlConfigService }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    UserModule,
    StoreModule,
    FavoritesModule,
    CategoryModule,
  ],
})
export default class AppModule {}
