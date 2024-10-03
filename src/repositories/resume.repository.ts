import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateResumeRequest, Resume, ResumeDocument, UserContext } from "src/domain";

@Injectable()
export class ResumeRepository {
    constructor(@InjectModel(Resume.name) private model: Model<Resume>) {}

    async createUserResume(context: UserContext, request: CreateResumeRequest): Promise<ResumeDocument> {
        const createdUserResume = new this.model({...request, userId: context.userId});
        return await createdUserResume.save();
    }

    async getAllUserResumes(context: UserContext): Promise<ResumeDocument[]> {
        return await this.model.find({ userId: context.userId }).exec();
    }
}
