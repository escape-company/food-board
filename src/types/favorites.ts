import { ObjectType, Field, Int } from 'type-graphql';
import Favorites from '../models/favorite.entity';

@ObjectType()
export class FavoriteType implements Partial<Favorites> {
  @Field(_type => Int)
  id: number;

  @Field(_type => Int, { nullable: true })
  userId?: number;

  @Field(_type => Int, { nullable: true })
  storeId?: number;
}
