import { Expose } from "class-transformer";
import { IsString } from "class-validator";

export class ChatHistoryRequest {
    @Expose({ name: 'user_prompt' })
    @IsString()
    userPrompt: string;

    @Expose({ name: 'ai_prompt' })
    @IsString()
    aiPrompt: string;
}
