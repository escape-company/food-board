import { Resolver, Query } from '@nestjs/graphql';
import { FavoritesType } from '../types/favorites';
import FavoritesService from '../services/favorites.service';

@Resolver(_of => FavoritesType)
export default class FavoritesResolver {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Query(_returns => [FavoritesType])
  async test() {
    return await this.favoritesService.getFavorites();
  }
}
