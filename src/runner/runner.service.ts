import { UpdateRunnerDTO } from './dto/updateRunner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Runner } from './runner.entity';
import { CreateRunnerDTO } from './dto/createRunner.dto';

@Injectable()
export class RunnerService {
    constructor(
        @InjectRepository(Runner)
        private runnerRepository: Repository <Runner>
    ){}

    async findRunner(id:number):Promise <Runner| undefined> {
        return this.runnerRepository.findOne({where:{id}})
    }

    async findAllRunners(): Promise<Runner[]>{
        return this.runnerRepository.find()
    }

    async createRunner(runner: CreateRunnerDTO): Promise<Runner>{
        const newRunner = this.runnerRepository.create(runner)
        return this.runnerRepository.save(newRunner)
    }

    async deleteRunner(id:number):Promise<void>{
        await this.runnerRepository.delete(id)
    }

    async updateRunner(id: number, runnerUpdate: UpdateRunnerDTO): Promise<void> {
        await this.runnerRepository.update(id, runnerUpdate);
    }
}
