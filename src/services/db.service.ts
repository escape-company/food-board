import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import config from 'config';

export default class TypeOrmConfigService implements TypeOrmOptionsFactory {
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    const dbConfig: Partial<TypeOrmModuleOptions> = config.get('db');
    return {
      ...dbConfig,
      cache: true,
      synchronize: true,
      entities: [`${__dirname}/../models/*.entity.[jt]s`],
    };
  }
}
