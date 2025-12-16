import fs from 'fs/promises';
import path from 'path';
import { encryptData, decryptData } from './crypto';

const dataDir = path.join(process.cwd(), 'data');

export async function readJSON<T>(filename: string): Promise<T> {
  const filePath = path.join(dataDir, filename);
  try {
    const rawData = await fs.readFile(filePath, 'utf-8');
    // Try to decrypt. If it's plain JSON, decryptData returns it as is (fallback).
    const decrypted = decryptData(rawData);
    return JSON.parse(decrypted);
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    throw new Error(`Failed to read database: ${filename}`);
  }
}

export async function writeJSON<T>(filename: string, data: T): Promise<void> {
  const filePath = path.join(dataDir, filename);
  try {
    const jsonString = JSON.stringify(data, null, 2);
    const encrypted = encryptData(jsonString);
    await fs.writeFile(filePath, encrypted, 'utf-8');
  } catch (error) {
    console.error(`Error writing ${filename}:`, error);
    throw new Error(`Failed to write database: ${filename}`);
  }
}
