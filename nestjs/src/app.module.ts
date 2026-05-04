import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { DatabaseModule } from './database/database.module';
import { StudentModule } from './student/student.module';
import { AuthModule } from './auth/auth.module';

import configuration from './config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    HealthModule,
    DatabaseModule,
    StudentModule,
    AuthModule,

  ]
})
export class AppModule { }

