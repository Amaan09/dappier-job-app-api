import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
    @Get()
    getAllUsers() {
        return 'HI';
    }
}
