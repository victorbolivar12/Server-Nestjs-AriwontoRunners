import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RunnerService } from './runner.service';
import { RunnerController } from './runner.controller';
import { Runner } from './runner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Runner])],
  providers: [RunnerService],
  controllers: [RunnerController],
})
export class RunnerModule {}

