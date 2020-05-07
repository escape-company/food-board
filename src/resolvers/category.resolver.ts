import { Resolver, Query, Args } from '@nestjs/graphql';
import { CategoryType, CategoryInputType } from '../types/category';
import CategoryService from '../services/category.service';

@Resolver(_of => CategoryType)
export default class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(_returns => [CategoryType], {
    name: 'category',
    description: 'category 정보를 가져옵니다.',
    nullable: true,
  })
  async getCategories(
    @Args({
      name: 'options',
      description: 'category 정보를 가져오기 위한 옵션',
      type: () => CategoryInputType,
      nullable: true,
    })
    options: CategoryInputType,
  ) {
    options = options ? { ...options } : null;
    return await this.categoryService.getCategories(options);
  }
}
