import { Module } from '@nestjs/common';
import { AuthService } from 'src/services/auth/auth.service';
import { AuthController } from '../controllers/auth/auth.controller';
import { UserModule } from './user.module';

@Module({
  imports: [
    UserModule
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
