import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import databaseConfig from './config/database.config';
import { UserModule } from './controllers/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(databaseConfig().uri || 'mongodb+srv://amaan1609:GOTGJjTfqfVFr4sO@cluster0.hpo5k.mongodb.net/DappierJobApp?retryWrites=true&w=majority&appName=Cluster0'),
    UserModule
  ]
})
export class AppModule {}
