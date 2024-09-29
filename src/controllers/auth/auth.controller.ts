import { Body, Controller, Post } from '@nestjs/common';
import { AllowAnonymous } from 'src/decorators';
import { LoginRequest, SignupRequest } from 'src/domain';
import { AuthService } from 'src/services/auth/auth.service';


@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @AllowAnonymous()
    @Post('signup')
    singUp(@Body() request: SignupRequest) {
        return this.authService.signUp(request);
    }

    @AllowAnonymous()
    @Post('login')
    login(@Body() request: LoginRequest) {
        return this.authService.login(request);
    }
}
