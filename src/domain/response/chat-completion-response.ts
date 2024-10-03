import { Expose } from "class-transformer";
import { IsString } from "class-validator";

export class ChatCompletionResponse {
    @Expose({ name: 'user_prompt' })
    @IsString()
    userPrompt: string;

    @Expose({ name: 'ai_prompt' })
    @IsString()
    aiPrompt: string;

    @Expose({ name: 'namespace_id' })
    @IsString()
    namespaceId: string;
}
