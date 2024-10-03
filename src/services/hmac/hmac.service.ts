import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';

@Injectable()
export class HmacService {
    private readonly secret: string;

    constructor(private configService: ConfigService) {
        this.secret = this.configService.get('DAPPIER_BOT_API_SECRET');
    }

    createHMACSignature(): string {
        return crypto
            .createHmac('sha256', this.secret)
            .digest('hex');
    }
}
