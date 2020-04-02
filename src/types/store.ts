import { ObjectType, Field, Int } from 'type-graphql';
import Store from '../models/store.entity';

@ObjectType()
export class StoreType implements Partial<Store> {
  @Field(_type => Int)
  id: number;

  @Field(_type => String, { nullable: true })
  name?: string;

  @Field(_type => String, { nullable: true })
  address?: string;

  @Field(_type => Int, { nullable: true })
  categoryId?: number;
}
