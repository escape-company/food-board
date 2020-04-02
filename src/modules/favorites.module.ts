import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import FavoritesService from '../services/favorites.service';
import FavoritesRepository from '../repositories/favorites.repository';
import FavoritesResolver from '../resolvers/favorites.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([FavoritesRepository])],
  providers: [FavoritesService, FavoritesResolver],
  exports: [FavoritesService],
})
export default class FavoritesModule {}
