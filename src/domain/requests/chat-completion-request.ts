import { Expose } from "class-transformer";
import { IsArray, IsOptional, IsString } from "class-validator";
import { ChatHistoryRequest } from "./chat-history-request";

export class ChatCompletionRequest {
    @Expose({ name: 'user_prompt' })
    @IsString()
    userPrompt: string;

    @Expose({ name: 'namespace_id' })
    @IsString()
    namespaceId: string;

    @Expose({ name: 'chat_history' })
    @IsArray()
    chatHistory: ChatHistoryRequest[];

    @Expose({ name: 'search_query' })
    @IsOptional()
    @IsString()
    searchQuery?: string;
}
