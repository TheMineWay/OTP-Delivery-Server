import { existsSync, readFileSync } from 'fs';

export const readDbFile = <T extends object>(
  path: string,
  container: string,
) => {
  const filePath = `/app-data/${container}/${path}`;
  const exists = existsSync(filePath);

  if (!exists) return { exists: false, data: null };

  return {
    exists: true,
    data: JSON.parse(readFileSync(filePath, 'utf-8')) as T,
  };
};
