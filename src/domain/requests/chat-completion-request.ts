import { ChatHistory } from "./chat-history-request";

export class ChatCompletionRequest {
    userPrompt: string;

    namespaceId: string;

    chatHistory: ChatHistory[];

    searchQuery?: string;
}
