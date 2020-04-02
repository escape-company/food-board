import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserService from '../services/store.service';
import UserRepository from '../repositories/store.repository';
import UserResolver from '../resolvers/store.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export default class StoreModule {}
