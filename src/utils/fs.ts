import fs from 'fs-extra';

export async function fileExists(path: string): Promise<boolean> {
  try {
    return (await fs.stat(path)).isFile();
  } catch (e) {
    return false;
  }
}

export function fileExistsSync(path: string): boolean {
  try {
    return fs.statSync(path).isFile();
  } catch (e) {
    return false;
  }
}

export async function directoryExists(path: string): Promise<boolean> {
  try {
    return (await fs.stat(path)).isDirectory();
  } catch (e) {
    return false;
  }
}

export function directoryExistsSync(path: string): boolean {
  try {
    return fs.statSync(path).isDirectory();
  } catch (e) {
    return false;
  }
}
