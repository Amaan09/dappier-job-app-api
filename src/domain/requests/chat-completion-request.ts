import { ChatHistoryRequest } from "./chat-history-request";

export class ChatCompletionRequest {
    userPrompt: string;

    namespaceId: string;

    chatHistory: ChatHistoryRequest[];

    searchQuery?: string;
}
