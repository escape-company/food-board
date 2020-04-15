import { Resolver, Query } from '@nestjs/graphql';
import { UserType } from '../types/user';
import UserService from '../services/user.service';

@Resolver(_of => UserType)
export default class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(_returns => [UserType])
  async users() {
    return await this.userService.getUser();
  }
}
