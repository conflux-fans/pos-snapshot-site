import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { SnapshotModule } from './snapshot/snapshot.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true }),
    SnapshotModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
