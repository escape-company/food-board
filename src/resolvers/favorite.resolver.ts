import { Resolver, Query } from '@nestjs/graphql';
import { FavoriteType } from '../types/favorites';
import FavoriteService from '../services/favorite.service';

@Resolver(_of => FavoriteType)
export default class FavoriteResolver {
  constructor(private readonly favoriteService: FavoriteService) { }

  @Query(_returns => [FavoriteType])
  async test() {
    return await this.favoriteService.getFavorites();
  }
}
