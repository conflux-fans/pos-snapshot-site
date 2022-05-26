import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { makeShot } from '../../snapshots/index.js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SnapshotTaskService {
  private readonly logger = new Logger(SnapshotTaskService.name);

  constructor(private configService: ConfigService) {}

  @Cron('0 0 * * * *')
  handleCron() {
    const dir = this.configService.get<string>('CURRENT_SNAPSHOT_PATH');
    makeShot(dir).then(() => {
      this.logger.log('Snapshot successed');
    });
  }
}
