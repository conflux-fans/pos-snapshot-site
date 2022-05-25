export interface BaseShot {
  address: string;
  mirrorAddress: string;
  votes: number;
  available: number;
  poolAddress?: string;
}

export interface Snapshot extends BaseShot {
  firstShot: number;
  delta: number;
  estimatedPPI?: number;
}

export interface SnapshotSummary {
  totalDelta: number;
  rewardPerCFX: number;
}
