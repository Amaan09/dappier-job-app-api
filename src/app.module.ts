import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import databaseConfig from './config/database.config';
import { UserModule } from './controllers/user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthModule } from './controllers/auth/auth.module';
import jwtConfig from './config/jwt.config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(databaseConfig().uri),
    JwtModule.register(jwtConfig()),
    UserModule,
    AuthModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ]
})
export class AppModule {}
