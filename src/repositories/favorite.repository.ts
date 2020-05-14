import Favorite from '../models/favorite.entity';
import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';

@EntityRepository(Favorite)
export default class FavoriteRepository extends BaseRepository<Favorite> {
  async getAll() {
    return this.find();
  }
}
