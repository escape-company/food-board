import { ObjectType, Field, Int } from 'type-graphql';
import Favorites from '../models/favorites.entity';

@ObjectType()
export class FavoritesType implements Partial<Favorites> {
  @Field(_type => Int)
  id: number;

  @Field(_type => Int, { nullable: true })
  userId?: number;

  @Field(_type => Int, { nullable: true })
  storeId?: number;
}
