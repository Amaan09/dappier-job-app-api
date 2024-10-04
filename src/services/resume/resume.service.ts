import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { ResumeRepository } from 'src/repositories/resume.repository';
import { DappierBotService } from '../dappier-bot/dappier-bot.service';
import { CreateResumeRequest, ResumeDocument, UserContext } from 'src/domain';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class ResumeService {

    constructor(
        private userRepo: UserRepository,
        private resumeRepo: ResumeRepository,
        private botService: DappierBotService
    ) { }

    async createUserResume(context: UserContext, request: CreateResumeRequest): Promise<ResumeDocument> {
        // Find the current user.
        const user = await this.userRepo.getLoggedInUser(context);

        // Send model for training.
        const response = await this.botService.trainModel({
            referenceId: uuid(),
            userEmail: user.email,
            resumeFilepath: request.fileUrl,
            jobDescription: request.jobDescription
        });

        if (response.status === "failure") {
            throw new InternalServerErrorException("Training the model failed. Please try again.");
        }

        request.namespaceId = response.namespaceId;

        return this.resumeRepo.createUserResume(context, request);
    }
}
