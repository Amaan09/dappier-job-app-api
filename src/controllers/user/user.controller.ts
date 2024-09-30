import { Body, Controller, FileTypeValidator, Get, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateUserRequest } from 'src/domain';
import { UserRepository } from 'src/repositories/user.repository';
import { AwsS3Service } from 'src/services/aws-s3/aws-s3.service';

@Controller('users')
export class UserController {
    constructor(private readonly userRepository: UserRepository, private readonly s3Service: AwsS3Service) {}

    @Get()
    getAllUsers() {
        return this.userRepository.getAllUsers();
    }

    @Post('/file')
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
