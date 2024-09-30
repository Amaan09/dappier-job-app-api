import { Module } from '@nestjs/common';
import { FileUploadController } from 'src/controllers/file-upload/file-upload.controller';
import { AwsS3Service } from 'src/services/aws-s3/aws-s3.service';

@Module({
    controllers: [FileUploadController],
    providers: [AwsS3Service]
})
export class FileUploadModule {}
