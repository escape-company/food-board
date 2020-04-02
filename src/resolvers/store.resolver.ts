import { Resolver, Query } from '@nestjs/graphql';
import { StoreType } from '../types/store';
import StoreService from '../services/store.service';

@Resolver(_of => StoreType)
export default class UserResolver {
  constructor(private readonly userService: StoreService) {}

  @Query(_returns => [StoreType])
  async test() {
    return await this.userService.getStore();
  }
}
