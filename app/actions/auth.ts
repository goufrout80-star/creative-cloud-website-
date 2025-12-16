'use server';

import { createSession, deleteSession } from '@/lib/session';
import { readJSON } from '@/lib/db';
import { AdminUser } from '@/lib/types';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';
import { checkRateLimit, logSecurityEvent, sanitizeInput } from '@/lib/security';
import { headers } from 'next/headers';

export async function loginAction(prevState: any, formData: FormData) {
  const rawUsername = formData.get('username') as string;
  const password = formData.get('password') as string;
  
  // Get IP
  const headersList = await headers();
  const ip = headersList.get('x-forwarded-for') || 'unknown';

  // 1. Rate Limiting
  const isAllowed = checkRateLimit(`login:${ip}`, 5, 10 * 60 * 1000); // 5 attempts per 10 min
  if (!isAllowed) {
    await logSecurityEvent('login_blocked', { reason: 'rate_limit', username: rawUsername }, ip);
    return { message: 'Too many attempts. Please try again later.' };
  }

  // 2. Sanitization
  const username = sanitizeInput(rawUsername);

  if (!username || !password) {
    return { message: 'Please enter both username and password.' };
  }

  try {
    const admins = await readJSON<AdminUser[]>('admin.json');
    const admin = admins.find((u) => u.username === username);

    // Generic Error to prevent enumeration
    const ERROR_MSG = 'Invalid credentials.';

    if (!admin) {
      await logSecurityEvent('login_failed', { reason: 'user_not_found', username }, ip);
      return { message: ERROR_MSG };
    }

    const isMatch = await bcrypt.compare(password, admin.passwordHash);

    if (!isMatch) {
      await logSecurityEvent('login_failed', { reason: 'bad_password', username }, ip);
      return { message: ERROR_MSG };
    }

    // Success
    await createSession(admin.id);
    await logSecurityEvent('login_success', { userId: admin.id }, ip);

  } catch (error) {
    console.error('Login error:', error);
    return { message: 'Something went wrong.' };
  }

  redirect('/imadmin/dashboard');
}

export async function logoutAction() {
  await deleteSession();
  redirect('/imadmin');
}
