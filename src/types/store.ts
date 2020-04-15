import { ObjectType, Field, Int, InputType } from 'type-graphql';
import Store from '../models/store.entity';
import { IsInt, IsArray, IsOptional } from 'class-validator';

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

@InputType()
export class StoreInputType {
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
