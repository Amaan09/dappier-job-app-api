import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import databaseConfig from './config/database.config';
import { UserModule } from './controllers/user/user.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // MongooseModule.forRoot(databaseConfig().uri),
    // UserModule // TEST
  ],
  controllers: [AppController]
})
export class AppModule {}
