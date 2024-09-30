import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import s3ClientConfig from 'src/config/s3-client.config';
import * as crypto from "crypto";
import { FileUploadResponse } from 'src/domain/response';

@Injectable()
export class AwsS3Service {
    private readonly _client = new S3Client(s3ClientConfig());
    private bucketName = this.configService.get('S3_BUCKET_NAME');

    constructor(private configService: ConfigService) { }

    async uploadFile(filename: string, file: any): Promise<FileUploadResponse> {
        try {
            const parts = filename.split('.');
            const name = parts[0];
            const extension = parts[1];
            const key = `${name}-${crypto.randomUUID()}.${extension}`;


            const command = new PutObjectCommand({
                Bucket: this.bucketName,
                Key: key,
                Body: file.buffer,
                ContentType: file.mimetype,
                ACL: 'public-read',
        
                Metadata: {
                    originalName: file.originalname,
                },
            });
 
            const response = await this._client.send(command);
            if (response.$metadata.httpStatusCode === 200) {
                return {
                    fileName: key,
                    path: this.getFileUrl(key).url
                };
            }
        } catch (err) {
            console.error(err);
        }
    }

    getFileUrl(key: string) {
        return { url: `https://${this.bucketName}.s3.amazonaws.com/${key}` };
    }
}
