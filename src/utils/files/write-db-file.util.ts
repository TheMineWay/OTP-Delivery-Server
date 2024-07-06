import { writeFileSync } from 'fs';

export const writeDbFile = <T extends object>(
  path: string,
  container: string,
  data: T,
) => {
  writeFileSync(`/app-data/${container}/${path}`, JSON.stringify(data));
};
