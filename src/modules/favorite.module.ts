import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import FavoriteService from '../services/favorite.service';
import FavoriteRepository from '../repositories/favorite.repository';
import FavoriteResolver from '../resolvers/favorite.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteRepository])],
  providers: [FavoriteService, FavoriteResolver],
  exports: [FavoriteService],
})
export default class FavoriteModule { }
