import { Injectable } from '@nestjs/common';
import Service from './service';
import CategoryRepository from '../repositories/category.repository';
import { CategoryInputType, CategoryType } from '../types/category';

@Injectable()
export default class CategoryService extends Service {
  constructor(private readonly categoryRepository: CategoryRepository) {
    super();
  }

  async getCategories(options?: CategoryInputType): Promise<CategoryType[]> {
    const queryBuilder = this.categoryRepository.createQueryBuilder('category');

    if (options?.ids) {
      queryBuilder.andWhere('id IN (:ids)', { ids: [...options.ids] });
    }

    queryBuilder.skip((options && options.offset) || 0);
    queryBuilder.take((options && options.limit) || 100);
    return await queryBuilder.getMany();
  }
}
