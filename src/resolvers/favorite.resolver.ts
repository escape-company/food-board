import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { FavoriteType, FavoriteInputType } from '../types/favorite';
import FavoriteService from '../services/favorite.service';

@Resolver(_of => FavoriteType)
export default class FavoriteResolver {
  constructor(private readonly favoriteService: FavoriteService) {}

  // @Query(_returns => [FavoriteCountType], {
  //   name: 'favorite',
  //   description: 'user의 즐겨찾기를 설정/해제합니다.',
  //   nullable: true,
  // })
  // async setFavoriteStore(
  //   @Args({
  //     name: 'options',
  //     description: 'user의 즐겨찾기를 설정/해제 하기위한 옵션',
  //     type: () => FavoriteInputType,
  //     nullable: true,
  //   })
  //   options: FavoriteInputType,
  // ) {
  //   return await this.favoriteService.setFavoriteStore(options);
  // }

  @Mutation(_returns => Boolean, {
    name: 'favorite',
    description: 'user의 즐겨찾기를 설정/해제합니다.',
    nullable: true,
  })
  async setFavoriteStore(
    @Args({
      name: 'options',
      description: 'user의 즐겨찾기를 설정/해제 하기위한 옵션',
      type: () => FavoriteInputType,
      nullable: true,
    })
    options: FavoriteInputType,
  ) {
    await this.favoriteService.setFavoriteStore(options);
    return true;
  }
}
