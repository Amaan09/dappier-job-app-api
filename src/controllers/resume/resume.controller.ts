import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserContextHelper } from 'src/decorators';
import { ChatCompletionRequest, CreateResumeRequest, TrainModelRequest, UserContext } from 'src/domain';
import { ResumeRepository } from 'src/repositories/resume.repository';
import { DappierBotService } from 'src/services/dappier-bot/dappier-bot.service';
import { ResumeService } from 'src/services/resume/resume.service';

@Controller('resume')
export class ResumeController {

    constructor(
        private readonly resumeRepository: ResumeRepository,
        private readonly resumeService: ResumeService,
        private readonly botServie: DappierBotService
    ) {}

    @Post('create')
    createUserResume(@UserContextHelper() context: UserContext, @Body() request: CreateResumeRequest) {
        return this.resumeService.createUserResume(context, request);
    }

    @Get()
    getAllUserResumes(@UserContextHelper() context: UserContext) {
        return this.resumeRepository.getAllUserResumes(context);
    }

    @Post('chat-completion')
    chatCompletion(@Body() request: ChatCompletionRequest) {
        return this.botServie.chatCompletion(request);
    }
}
