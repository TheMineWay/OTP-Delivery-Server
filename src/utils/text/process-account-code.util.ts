export const processAccountCode = (input: string) =>
  input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
