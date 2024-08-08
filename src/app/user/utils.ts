import { createHash } from 'crypto';

export function hashPassword(password: string, passwordSalt?: string): string {
  return createHash('sha256').update(`${password}${passwordSalt}`).digest('hex');
}
