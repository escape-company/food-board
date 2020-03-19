import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';

@Injectable()
export default class GraphqlConfigService implements GqlOptionsFactory {
  async createGqlOptions(): Promise<GqlModuleOptions> {
    return {
      context: ({ req, res }) => ({ req, res }),
      debug: true,
      playground: true,
      autoSchemaFile: true,
    };
  }
}
