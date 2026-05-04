import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import configuration from './config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    HealthModule,
    AuthModule,
    DatabaseModule,
  ],
  controllers: [AuthController],
})
export class AppModule {}

