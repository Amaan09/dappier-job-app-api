import { S3ClientConfig } from '@aws-sdk/client-s3';
import { registerAs } from '@nestjs/config';

export default registerAs(
  's3Client',
  (): S3ClientConfig => ({
    region: process.env.S3_REGION,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
    forcePathStyle: true
  }),
);
