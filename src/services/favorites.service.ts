import { Injectable } from '@nestjs/common';
import Service from './service';
import FavoriteRepository from '../repositories/favorite.repository';
import Favorites from '../models/favorite.entity';

@Injectable()
export default class FavoriteService extends Service {
  constructor(private readonly favoriteRepository: FavoriteRepository) {
    super();
  }

  async getFavorites(): Promise<Favorites[]> {
    return this.favoriteRepository.getAll();
  }
}
