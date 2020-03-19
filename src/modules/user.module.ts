import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserService from '../services/user.service';
import UserRepository from '../repositories/user.repository';
import UserResolver from '../resolvers/user.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export default class UserModule {}
