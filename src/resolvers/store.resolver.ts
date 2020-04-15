import { Resolver, Query, Args } from '@nestjs/graphql';
import { StoreType, StoreInputType } from '../types/store';
import StoreService from '../services/store.service';

@Resolver(_of => StoreType)
export default class StoreResolver {
  constructor(private readonly storeService: StoreService) {}

  @Query(_returns => [StoreType], {
    name: 'stores',
    description: 'store 정보를 가져옵니다.',
    nullable: true,
  })
  async getStores(
    @Args({
      name: 'options',
      description: 'store 정보를 가져오기 위한 옵션',
      type: () => StoreInputType,
      nullable: true,
    })
    options: StoreInputType,
  ) {
    options = options ? { ...options } : null;
    return await this.storeService.getStores(options);
  }
}
