import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { DatabaseModule } from './database/database.module';
import { StudentModule } from './student/student.module';
import { AuthModule } from './auth/auth.module';
import { GradeModule } from './grade/grade.module';
import { BookModule } from './book/book.module';

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
    GradeModule,
    BookModule,

  ]
})
export class AppModule { }

