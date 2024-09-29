import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginRequest, SignupRequest } from "src/domain";
import { UserRepository } from "src/repositories/user.repository";
import * as bcrypt from 'bcrypt';
import jwtConfig from "src/config/jwt.config";

const SALT_ROUNDS = 10;

@Injectable()
export class AuthService {

    constructor(
        private userRepository: UserRepository,
        private jwtService: JwtService
    ) { }

    async signUp(request: SignupRequest) {
        const foundUser = await this.userRepository.getUserByEmail(request.email);

        if (foundUser) {
            throw new HttpException('User already exists. Please login.', HttpStatus.INTERNAL_SERVER_ERROR);
        }

        if (request.password != request.confirmPassword) {
            throw new HttpException('Passwords do not match.', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
        const hash = await bcrypt.hash(request.password, SALT_ROUNDS);

        const user = await this.userRepository.createUser({
            email: request.email,
            password: hash,
            name: request.name
        });

        const payload = { 
            sub: user.id,
            userId: user.id
        };

        return {
            accessToken: await this.jwtService.signAsync(payload),
            expiresIn: jwtConfig().signOptions.expiresIn
        };
    }

    async login(request: LoginRequest) {
        const user = await this.userRepository.getUserByEmail(request.email);

        if (!user) {
            throw new HttpException('The entered username/password is invalid.', HttpStatus.UNAUTHORIZED);
        }
        
        const match = await bcrypt.compare(request.password, user.password);

        if (!match) {
            throw new HttpException('The entered username/password is invalid.', HttpStatus.UNAUTHORIZED);
        }

        const payload = { 
            sub: user.id,
            userId: user.id,
            userEmail: user.email
        };

        return {
            accessToken: await this.jwtService.signAsync(payload),
            expiresIn: jwtConfig().signOptions.expiresIn
        };
    }
}
