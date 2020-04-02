import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import CategoryService from '../services/category.service';
import CategoryRepository from '../repositories/category.repository';
import CategoryResolver from '../resolvers/category.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryRepository])],
  providers: [CategoryService, CategoryResolver],
  exports: [CategoryService],
})
export default class CategoryModule {}
