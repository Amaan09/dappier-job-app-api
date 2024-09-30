import { Controller, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AwsS3Service } from 'src/services/aws-s3/aws-s3.service';

@Controller('file-upload')
export class FileUploadController {

    constructor(private s3Service: AwsS3Service) {}

    @Post('file')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
        @UploadedFile(
            new ParseFilePipe({
                fileIsRequired: true,
            })
        )
        file: Express.Multer.File
    ) {
        return this.s3Service.uploadFile(file.originalname, file.buffer);
    }
}
