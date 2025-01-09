import * as migration_20250108_141358 from './20250108_141358';
import * as migration_20250109_105158 from './20250109_105158';

export const migrations = [
  {
    up: migration_20250108_141358.up,
    down: migration_20250108_141358.down,
    name: '20250108_141358',
  },
  {
    up: migration_20250109_105158.up,
    down: migration_20250109_105158.down,
    name: '20250109_105158'
  },
];
