import { Expose } from "class-transformer";
import { IsString } from "class-validator";

export class TrainModelRequest {
    @Expose({ name: 'user_email' })
    @IsString()
    userEmail: string;

    @Expose({ name: 'resume_id' })
    @IsString()
    resumeId: string;

    @Expose({ name: 'resume_filepath' })
    @IsString()
    resumeFilepath: string;

    @Expose({ name: 'job_description' })
    @IsString()
    jobDescription: string;
}
