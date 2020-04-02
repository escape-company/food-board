import Category from '../models/category.entity';
import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';

@EntityRepository(Category)
export default class CategoryRepository extends BaseRepository<Category> {
  async getAll() {
    return this.find();
  }
}
