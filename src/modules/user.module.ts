import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/domain/entities';
import { UserRepository } from 'src/repositories/user.repository';
import { AwsS3Service } from 'src/services/aws-s3/aws-s3.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserRepository, AwsS3Service],
  exports: [UserRepository]
})
export class UserModule {}
