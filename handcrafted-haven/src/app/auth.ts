
import { hashSync, genSaltSync, compare } from 'bcrypt-ts';

export function hashPassword(password: string): string {
  const salt = genSaltSync(10);
  return hashSync(password, salt);
}

export async function comparePassword(plain: string, storedHash: string){
    return await compare(plain, storedHash)
}

