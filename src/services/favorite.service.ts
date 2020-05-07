import { Injectable } from '@nestjs/common';
import Service from './service';
import FavoriteRepository from '../repositories/favorite.repository';
import { FavoriteInputType, FavoriteType } from '../types/favorite';
import Favorite from '../models/favorite.entity';
//import Favorite from '../models/favorite.entity';

@Injectable()
export default class FavoriteService extends Service {
  constructor(private readonly favoriteRepository: FavoriteRepository) {
    super();
  }

  async setFavoriteStore(options?: FavoriteInputType): Promise<number> {
    const countQueryBuilder = this.favoriteRepository.createQueryBuilder('favorite');
    const setQueryBuilder = this.favoriteRepository.createQueryBuilder();

    countQueryBuilder.andWhere('userId = :userId', { userId: options.userId });
    countQueryBuilder.andWhere('storeId = :storeId', { storeId: options.storeId });

    countQueryBuilder.skip((options && options.offset) || 0);
    countQueryBuilder.take((options && options.limit) || 100);
    const result = await countQueryBuilder.getCount();

    if (result > 0) {
      setQueryBuilder
        .delete()
        .from(Favorite)
        .where('userId = :userId', { userId: options.userId })
        .andWhere('storeId = :storeId', { storeId: options.storeId })
        .execute();
    } else {
      const userFavorite = new FavoriteType();
      userFavorite.userId = options.userId;
      userFavorite.storeId = options.storeId;

      setQueryBuilder
        .insert()
        .values(userFavorite)
        .execute();
    }

    console.log(countQueryBuilder.getQueryAndParameters());
    console.log(setQueryBuilder.getQueryAndParameters());

    return result;
  }
}
