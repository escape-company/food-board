import Favorites from '../models/favorite.entity';
import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';

@EntityRepository(Favorites)
export default class FavoriteRepository extends BaseRepository<Favorites> {
  async getAll() {
    return this.find();
  }
}
