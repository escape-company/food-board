import { Injectable } from '@nestjs/common';
import Service from './service';
import UserRepository from '../repositories/user.repository';
import { UserInputType, UserType } from '../types/user';

@Injectable()
export default class UserService extends Service {
  constructor(private readonly userRepository: UserRepository) {
    super();
  }

  async getUsers(options?: UserInputType): Promise<UserType[]> {
    const queryBuilder = this.userRepository.createQueryBuilder('user').leftJoinAndSelect('user.favorites', 'favorite');

    if (options?.ids) {
      queryBuilder.andWhere('user.id IN (:ids)', { ids: [...options.ids] });
    }

    queryBuilder.skip((options && options.offset) || 0);
    queryBuilder.take((options && options.limit) || 100);
    return await queryBuilder.getMany();
  }
}
