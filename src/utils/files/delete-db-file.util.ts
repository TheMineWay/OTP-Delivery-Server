import { unlinkSync } from 'fs';

export const deleteDbFile = (path: string, container: string) => {
  unlinkSync(`/app-data/${container}/${path}`);
};
