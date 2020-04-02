import { Injectable } from '@nestjs/common';
import Service from './service';
import CategoryRepository from '../repositories/category.repository';
import Category from '../models/category.entity';

@Injectable()
export default class CategoryService extends Service {
  constructor(private readonly categoryRepository: CategoryRepository) {
    super();
  }

  async getCategory(): Promise<Category[]> {
    return this.categoryRepository.getAll();
  }
}
