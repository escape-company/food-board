import { Injectable } from '@nestjs/common';
import Service from './service';
import FavoritesRepository from '../repositories/favorites.repository';
import Favorites from '../models/favorites.entity';

@Injectable()
export default class FavoriesService extends Service {
  constructor(private readonly favoritesRepository: FavoritesRepository) {
    super();
  }

  async getFavorites(): Promise<Favorites[]> {
    return this.favoritesRepository.getAll();
  }
}
