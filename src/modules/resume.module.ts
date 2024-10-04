import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResumeController } from 'src/controllers/resume/resume.controller';
import { Resume, ResumeSchema } from 'src/domain';
import { ResumeRepository } from 'src/repositories/resume.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { AwsS3Service } from 'src/services/aws-s3/aws-s3.service';
import { DappierBotService } from 'src/services/dappier-bot/dappier-bot.service';
import { HmacService } from 'src/services/hmac/hmac.service';
import { ResumeService } from 'src/services/resume/resume.service';
import { UserModule } from './user.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Resume.name, schema: ResumeSchema }]),
        HttpModule,
        UserModule
    ],
    controllers: [ResumeController],
    providers: [
        ResumeRepository,
        ResumeService,
        AwsS3Service,
        DappierBotService,
        HmacService,
        UserRepository
    ]
})
export class ResumeModule {}
