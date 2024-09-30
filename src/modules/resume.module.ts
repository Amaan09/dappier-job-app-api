import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResumeController } from 'src/controllers/resume/resume.controller';
import { Resume, ResumeSchema } from 'src/domain';
import { ResumeRepository } from 'src/repositories/resume.repository';
import { AwsS3Service } from 'src/services/aws-s3/aws-s3.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Resume.name, schema: ResumeSchema }])],
    controllers: [ResumeController],
    providers: [ResumeRepository, AwsS3Service]
})
export class ResumeModule {}
