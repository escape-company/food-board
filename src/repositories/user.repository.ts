import User from '../models/user.entity';
import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';

@EntityRepository(User)
export default class UserRepository extends BaseRepository<User> {
  async getAll() {
    return this.find();
  }
}
