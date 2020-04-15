import { ObjectType, Field, Int, InputType } from 'type-graphql';
import { FavoriteType } from './favorite';
import { IsInt, IsArray, IsOptional } from 'class-validator';

@ObjectType()
export class UserType {
  @Field(_type => Int)
  id: number;

  @Field(_type => String, { nullable: true })
  socialId?: string;

  @Field(_type => String, { nullable: true })
  token?: string;

  @Field(_type => [FavoriteType], { nullable: true })
  favorites?: FavoriteType[];
}

@InputType()
export class UserInputType {
  @Field(_type => [Int], { nullable: true })
  @IsInt({
    each: true,
  })
  @IsArray()
  @IsOptional()
  ids?: number[];

  @Field(_type => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  offset?: number;

  @Field(_type => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  limit?: number;
}
