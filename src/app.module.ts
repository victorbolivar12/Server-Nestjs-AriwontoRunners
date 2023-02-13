import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { RunnerController } from './runner/runner.controller';
import { RunnerService } from './runner/runner.service';
import { RunnerModule } from './runner/runner.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'victor8680544',
      database: 'AriwontoRunners',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    RunnerModule,
    UsersModule, 
    AuthModule 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
