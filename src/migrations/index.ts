import * as migration_20241231_080419 from './20241231_080419';

export const migrations = [
  {
    up: migration_20241231_080419.up,
    down: migration_20241231_080419.down,
    name: '20241231_080419'
  },
];
