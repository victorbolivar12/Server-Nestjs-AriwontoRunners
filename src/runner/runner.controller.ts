import { UpdateRunnerDTO } from './dto/updateRunner.dto';
import { CreateRunnerDTO } from './dto/createRunner.dto';
import { RunnerService } from './runner.service';
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Runner } from './runner.entity';

@Controller('runner')
export class RunnerController {
    constructor(private runnerService: RunnerService){}

    @Get()
    async getRunners(): Promise<Runner[]>{
        return this.runnerService.findAllRunners();
    }

    @Get(':id')
    async getRunner(@Param('id') id:number): Promise<Runner>{
        return this.runnerService.findRunner(id)
    }

    @Post()
    async createNewRunner(@Body() newRunner: CreateRunnerDTO):Promise<Runner>{
        return this.runnerService.createRunner(newRunner);
    }

    @Delete(':id')
    async deleteRunner(@Param('id') id: number):Promise<void>{
        return this.runnerService.deleteRunner(id)
    }

    @Put(':id')
    async updateRunner(@Param('id') id: number, @Body() RunnerUpdate:UpdateRunnerDTO){
        await this.runnerService.updateRunner(id ,RunnerUpdate)
    }

}
