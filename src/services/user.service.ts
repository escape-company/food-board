import { Injectable } from '@nestjs/common';
import Service from './service';
import UserRepository from '../repositories/user.repository';
import User from '../models/user.entity';

@Injectable()
export default class UserService extends Service {
  constructor(private readonly userRepository: UserRepository) {
    super();
  }

  async getUser(): Promise<User[]> {
    return this.userRepository.getAll();
  }
}
