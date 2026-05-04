import { Module, Logger } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('mongodb.uri'),

        onConnectionCreate: (connection) => {
          Logger.log('MongoDB connected', 'Database');

          connection.on('error', (err) => {
            Logger.error('MongoDB error', err, 'Database');
          });

          return connection;
        },
      }),
    }),
  ],
})
export class DatabaseModule { }