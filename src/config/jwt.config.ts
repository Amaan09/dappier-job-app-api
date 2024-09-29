import { registerAs } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export default registerAs(
    'jwtConfig',
    (): JwtModuleOptions => ({
        global: true,
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: 3600 }
    }),
);
