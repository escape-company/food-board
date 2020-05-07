import { ObjectType, Field, Int, InputType } from 'type-graphql';
import Favorites from '../models/favorite.entity';
import { IsInt, IsOptional } from 'class-validator';

@ObjectType()
export class FavoriteType implements Partial<Favorites> {
  @Field(_type => Int)
  id: number;

  @Field(_type => Int, { nullable: true })
  userId?: number;

  @Field(_type => Int, { nullable: true })
  storeId?: number;
}

@ObjectType()
export class FavoriteCountType {
  @Field(_type => Int)
  count: number;
}

@InputType()
export class FavoriteInputType {
  @Field(_type => Int, { nullable: false })
  @IsOptional()
  userId?: number;

  @Field(_type => Int, { nullable: false })
  @IsOptional()
  storeId?: number;

  @Field(_type => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  offset?: number;

  @Field(_type => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  limit?: number;
}
