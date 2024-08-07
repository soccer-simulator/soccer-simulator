import { stat, statSync } from 'fs-extra';

export async function fileExists(path: string): Promise<boolean> {
  try {
    return (await stat(path)).isFile();
  } catch (e) {
    return false;
  }
}

export function fileExistsSync(path: string): boolean {
  try {
    return statSync(path).isFile();
  } catch (e) {
    return false;
  }
}

export async function directoryExists(path: string): Promise<boolean> {
  try {
    return (await stat(path)).isDirectory();
  } catch (e) {
    return false;
  }
}

export function directoryExistsSync(path: string): boolean {
  try {
    return statSync(path).isDirectory();
  } catch (e) {
    return false;
  }
}
