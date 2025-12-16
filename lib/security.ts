import { readJSON, writeJSON } from './db';
export { sanitizeInput, validateEmail } from './crypto';

// --- Logging ---
export async function logSecurityEvent(action: string, details: any, ip?: string) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    action,
    details,
    ip: ip || 'unknown',
  };

  try {
    // We read/write using DB helper which handles encryption transparently
    const logs = await readJSON<any[]>('security-logs.json').catch(() => []);
    const updatedLogs = [logEntry, ...logs].slice(0, 1000);
    await writeJSON('security-logs.json', updatedLogs); 
  } catch (e) {
    console.error('Failed to write security log', e);
  }
}

// --- Rate Limiting (Simple In-Memory) ---
const rateLimitMap = new Map<string, { count: number; lastAttempt: number }>();

export function checkRateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record) {
    rateLimitMap.set(key, { count: 1, lastAttempt: now });
    return true;
  }

  if (now - record.lastAttempt > windowMs) {
    rateLimitMap.set(key, { count: 1, lastAttempt: now });
    return true;
  }

  if (record.count >= limit) {
    return false;
  }

  record.count++;
  return true;
}
