import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HmacService } from '../hmac/hmac.service';
import { ChatCompletionRequest, ChatCompletionResponse, TrainModelRequest, TrainModelResponse } from 'src/domain';

@Injectable()
export class DappierBotService {

    private readonly baseUrl: string;

    constructor(
        private configService: ConfigService,
        private client: HttpService,
        private hmacServie: HmacService
    ) {
        this.baseUrl = this.configService.get('DAPPIER_BOT_BASE_URL');
    }

    async trainModel(request: TrainModelRequest): Promise<TrainModelResponse> {
        const signature = this.hmacServie.createHMACSignature();

        try {
            const response = await this.client.axiosRef.post<TrainModelResponse>(`${this.baseUrl}/resume/train_model`, request, {
                headers: {
                    'X-Signature': signature,
                    'Content-Type': 'application/json',
                },
            });

            return response.data;
        } catch (error) {
            throw new HttpException(error.response?.data || 'Internal Server Error', error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async chatCompletion(request: ChatCompletionRequest): Promise<ChatCompletionResponse> {
        const signature = this.hmacServie.createHMACSignature();

        try {
            const response = await this.client.axiosRef.post(`${this.baseUrl}/resume/chat_completion`, request, {
                headers: {
                    'X-Signature': signature,
                    'Content-Type': 'application/json',
                },
            });

            return response.data;
        } catch (error) {
            throw new HttpException(error.response?.data || 'Internal Server Error', error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
