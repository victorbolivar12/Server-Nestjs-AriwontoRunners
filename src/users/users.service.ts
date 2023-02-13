import { updateUserDTO } from './dto/updateUser.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { createUserDTO } from './dto/createUser.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    async findOne(username: string): Promise<User | undefined> {
        return this.usersRepository.findOne({ where: {username} });
    }

    async findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async createUser(User:createUserDTO): Promise<User> {
        const hash = await bcrypt.hash(User.password, 10);
        const newUser = this.usersRepository.create({ ...User, password: hash });
        return this.usersRepository.save(newUser);
    }

    async findUser(id:number): Promise<User| undefined>{
        return this.usersRepository.findOne({where: {id}})
    }

    async deleteUser(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }

    async updateUser(id: number, userUpdate: updateUserDTO): Promise<UpdateResult> {
        if (userUpdate.password) {
            userUpdate.password = await bcrypt.hash(userUpdate.password, 10);
        }
        return this.usersRepository.update({ id }, userUpdate);
    }

   
}
