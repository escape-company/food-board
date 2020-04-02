import { Injectable } from '@nestjs/common';
import Service from './service';
import StoreRepository from '../repositories/store.repository';
import Store from '../models/store.entity';

@Injectable()
export default class UserService extends Service {
  constructor(private readonly storeRepository: StoreRepository) {
    super();
  }

  async getStore(): Promise<Store[]> {
    return this.storeRepository.getAll();
  }
}
