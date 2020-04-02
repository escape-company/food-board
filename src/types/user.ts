import { ObjectType, Field, Int } from 'type-graphql';
import User from '../models/user.entity';

@ObjectType()
export class UserType implements Partial<User> {
  @Field(_type => Int)
  id: number;

  @Field(_type => String, { nullable: true })
  socialId?: string;

  @Field(_type => String, { nullable: true })
  token?: string;
}
