import { Injectable, Logger } from '@nestjs/common';
import { loadSnapshot } from '../../snapshots/index.js';
import { BaseShot } from './interfaces/snapshot.interface';
import { ConfigService } from '@nestjs/config';
import { Snapshot, SnapshotSummary } from './interfaces/snapshot.interface';

// Total aridroped PPI for the second round.
const ARI_DROP_PPI = 2100000;

@Injectable()
export class SnapshotService {
  private readonly logger = new Logger(SnapshotService.name);

  originalSnapshot: BaseShot[];
  originalSnapshotMap: Map<string, BaseShot>;

  originalSnapshotLoaded = false;

  constructor(private configService: ConfigService) {
    const dir = configService.get<string>('FIRST_SNAPSHOT_PATH');
    loadSnapshot(dir).then((shots) => {
      this.logger.log('Original snapshot loaded');
      this.originalSnapshot = shots;
      this.originalSnapshotLoaded = true;
      this.originalSnapshotMap = toSnapshotMap(shots);
    });
  }

  async getSnapshots(): Promise<Snapshot[]> {
    const dir = this.configService.get<string>('CURRENT_SNAPSHOT_PATH');
    const shots = await loadSnapshot(dir);
    let totalDelta = 0;
    const deltaShots = shots.map((shot) => {
      const originalShot = this.originalSnapshotMap.get(shot.address);
      const firstShot = originalShot ? originalShot.available : 0;
      const delta = shot.available - firstShot;
      if (delta > 0) totalDelta += delta;
      return {
        ...shot,
        firstShot,
        delta,
        estimatedPPI: 0,
      };
    });
    for (const shot of deltaShots) {
      if (shot.delta < 0) continue;
      shot.estimatedPPI = ((ARI_DROP_PPI * shot.delta) / totalDelta).toFixed(4);
    }
    return deltaShots;
  }

  async getSnapshotSummary(): Promise<SnapshotSummary> {
    const dir = this.configService.get<string>('CURRENT_SNAPSHOT_PATH');
    const shots = await loadSnapshot(dir);
    let totalDelta = 0;
    for (const shot of shots) {
      const originalShot = this.originalSnapshotMap.get(shot.address);
      const firstShot = originalShot ? originalShot.available : 0;
      const delta = shot.available - firstShot;
      if (delta > 0) totalDelta += delta;
    }
    return {
      totalDelta,
      rewardPerCFX: ARI_DROP_PPI / totalDelta / 1000,
    };
  }
}

function toSnapshotMap(snapshots) {
  const map = new Map();
  for (let i = 0; i < snapshots.length; i++) {
    const snapshot = snapshots[i];
    map.set(snapshot.address, snapshot);
  }
  return map;
}
