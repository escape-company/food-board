import { Injectable } from '@nestjs/common';
import Service from './service';
import UserRepository from '../repositories/user.repository';

@Injectable()
export default class UserService extends Service {
  constructor(private readonly userRepository: UserRepository) {
    super();
  }

  async getUser() {
    return this.userRepository.getOne();
  }
}
