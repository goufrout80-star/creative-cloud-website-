import crypto from 'crypto';

// --- Configuration ---
const getEncryptionKey = () => {
  if (process.env.ENCRYPTION_KEY) {
    return process.env.ENCRYPTION_KEY;
  }
  if (process.env.NODE_ENV === 'production') {
    throw new Error('ENCRYPTION_KEY environment variable is required in production');
  }
  return 'dev_encryption_key_32_chars_long_!!';
};
const ENCRYPTION_KEY = getEncryptionKey(); // Must be 32 chars
const IV_LENGTH = 16;
const ALGORITHM = 'aes-256-cbc';

// Ensure key is 32 bytes
const getCipherKey = () => {
  return crypto.createHash('sha256').update(ENCRYPTION_KEY).digest();
};

// --- Encryption ---
export function encryptData(text: string): string {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, getCipherKey(), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString('hex') + ':' + encrypted.toString('hex');
}

export function decryptData(text: string): string {
  try {
    const textParts = text.split(':');
    if (textParts.length !== 2) throw new Error('Invalid format');
    
    const iv = Buffer.from(textParts.shift()!, 'hex');
    const encryptedText = Buffer.from(textParts.join(':'), 'hex');
    const decipher = crypto.createDecipheriv(ALGORITHM, getCipherKey(), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  } catch (e) {
    // If decryption fails, return original text (assuming it was plain)
    // This acts as a fallback for existing unencrypted data
    return text; 
  }
}

// --- Sanitization ---
export function sanitizeInput(input: string): string {
  if (!input) return '';
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/javascript:/gi, '') // Basic script blocking
    .trim();
}

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
