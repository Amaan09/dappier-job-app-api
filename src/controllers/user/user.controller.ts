import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserRequest } from 'src/domain';
import { UserRepository } from 'src/repositories/user.repository';

@Controller('users')
export class UserController {
    constructor(private readonly userRepository: UserRepository) {}

    @Get()
    getAllUsers() {
        return this.userRepository.getAllUsers();
    }

    @Post()
    createUser(@Body() createUserRequest: CreateUserRequest) {
        return this.userRepository.createUser(createUserRequest);
    }
}
