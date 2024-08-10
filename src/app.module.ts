import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './config/data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),// Ensure TypeOrmModule uses AppDataSource configuration
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
