import { Controller, Get } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user.repository';

@Controller('users')
export class UserController {
    
    constructor(private readonly userRepository: UserRepository) {}

    @Get()
    getAllUsers() {
        return this.userRepository.getAllUsers();
    }
}
