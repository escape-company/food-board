import { Resolver, Query } from '@nestjs/graphql';
import { CategoryType } from '../types/category';
import CategoryService from '../services/category.service';

@Resolver(_of => CategoryType)
export default class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(_returns => [CategoryType])
  async test() {
    return await this.categoryService.getCategory();
  }
}
