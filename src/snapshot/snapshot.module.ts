import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { SnapshotController } from './snapshot.controller';
import { SnapshotTaskService } from './snapshot.task';
import { SnapshotService } from './snapshot.service';

@Module({
  controllers: [SnapshotController],
  providers: [SnapshotTaskService, AppService, SnapshotService],
})
export class SnapshotModule {}
