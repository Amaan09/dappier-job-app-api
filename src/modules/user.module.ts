import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/domain/entities';
import { UserRepository } from 'src/repositories/user.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserRepository],
  exports: [UserRepository]
})
export class UserModule {}
