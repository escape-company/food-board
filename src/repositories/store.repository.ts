import Store from '../models/store.entity';
import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';

@EntityRepository(Store)
export default class StoreRepository extends BaseRepository<Store> {
  async getAll() {
    return this.find();
  }
}
