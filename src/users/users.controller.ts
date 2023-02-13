import { createUserDTO } from './dto/createUser.dto';
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { updateUserDTO } from './dto/updateUser.dto';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Post()
    async create(@Body() user: createUserDTO): Promise<User> {
        return this.usersService.createUser(user);
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<User> {
        return this.usersService.findUser(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.usersService.deleteUser(id);
    }

    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() userUpdate: updateUserDTO) {
        await this.usersService.updateUser(id, userUpdate);
    }

}
