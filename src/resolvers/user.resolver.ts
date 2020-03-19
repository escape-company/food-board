import { Resolver, Query } from '@nestjs/graphql';
import { UserType } from '../types/user';
import UserService from '../services/user.service';

@Resolver()
export default class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(_type => UserType)
  async test() {
    return this.userService.getUser();
  }
}
