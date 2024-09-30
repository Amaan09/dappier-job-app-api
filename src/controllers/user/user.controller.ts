import { Controller, Get } from '@nestjs/common';
import { UserContextHelper } from 'src/decorators';
import { UserRepository } from 'src/repositories/user.repository';

@Controller('user')
export class UserController {
    
    constructor(private readonly userRepository: UserRepository) {}

    @Get('get-loggedin-user')
    getLoggedInUser(@UserContextHelper() context) {
        return this.userRepository.getLoggedInUser(context);
    }
}
