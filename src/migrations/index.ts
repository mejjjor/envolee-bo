import * as migration_20241231_080419 from './20241231_080419';
import * as migration_20250104_133059 from './20250104_133059';

export const migrations = [
  {
    up: migration_20241231_080419.up,
    down: migration_20241231_080419.down,
    name: '20241231_080419',
  },
  {
    up: migration_20250104_133059.up,
    down: migration_20250104_133059.down,
    name: '20250104_133059'
  },
];
