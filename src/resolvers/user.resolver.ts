import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserType, UserInputType } from '../types/user';
import UserService from '../services/user.service';

@Resolver(_of => UserType)
export default class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(_returns => [UserType], {
    name: 'users',
    description: 'user 정보를 가져옵니다.',
    nullable: true,
  })
  async getUsers(
    @Args({
      name: 'options',
      description: 'user 정보를 가져오기 위한 옵션',
      type: () => UserInputType,
      nullable: true,
    })
    options: UserInputType,
  ) {
    options = options ? { ...options } : null;
    return await this.userService.getUsers(options);
  }
}
