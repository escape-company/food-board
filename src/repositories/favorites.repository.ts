import Favorites from '../models/favorites.entity';
import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';

@EntityRepository(Favorites)
export default class FavoritesRepository extends BaseRepository<Favorites> {
  async getAll() {
    return this.find();
  }
}
