import { ObjectType, Field, Int } from 'type-graphql';
import Category from '../models/category.entity';

@ObjectType()
export class CategoryType implements Partial<Category> {
  @Field(_type => Int)
  id: number;

  @Field(_type => String, { nullable: true })
  name?: string;
}
