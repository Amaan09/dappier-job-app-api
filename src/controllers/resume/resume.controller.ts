import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserContextHelper } from 'src/decorators';
import { CreateResumeRequest, UserContext } from 'src/domain';
import { ResumeRepository } from 'src/repositories/resume.repository';

@Controller('resume')
export class ResumeController {

    constructor(private readonly resumeRepository: ResumeRepository) {}

    @Post('create')
    CreateUserResume(@UserContextHelper() context: UserContext, @Body() request: CreateResumeRequest) {
        return this.resumeRepository.createUserResume(context, request);
    }

    @Get()
    GetAllUserResumes(@UserContextHelper() context: UserContext) {
        return this.resumeRepository.getAllUserResumes(context);
    }
}
