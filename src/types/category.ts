import { ObjectType, Field, Int, InputType } from 'type-graphql';
import Category from '../models/category.entity';
import { IsInt, IsArray, IsOptional } from 'class-validator';

@ObjectType()
export class CategoryType implements Partial<Category> {
  @Field(_type => Int)
  id: number;

  @Field(_type => String, { nullable: true })
  name?: string;
}

@InputType()
export class CategoryOptions {
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
