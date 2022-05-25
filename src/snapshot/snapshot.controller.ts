import { Controller, Get } from '@nestjs/common';
import { SnapshotService } from './snapshot.service';
import { Snapshot, SnapshotSummary } from './interfaces/snapshot.interface';

@Controller('snapshots')
export class SnapshotController {
  constructor(private readonly service: SnapshotService) {}

  @Get()
  async getSnapshot(): Promise<Snapshot[]> {
    return this.service.getSnapshots();
  }

  @Get('summary')
  async getSnapshotSummary(): Promise<SnapshotSummary> {
    return this.service.getSnapshotSummary();
  }
}
