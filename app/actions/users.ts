'use server';

import { readJSON, writeJSON } from '@/lib/db';
import { AdminUser } from '@/lib/types';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';
import { sanitizeInput } from '@/lib/security';

const FILE = 'admin.json';

export async function addAdminAction(formData: FormData) {
  const admins = await readJSON<AdminUser[]>(FILE);
  const username = sanitizeInput(formData.get('username') as string);
  const password = formData.get('password') as string;

  if (admins.find(u => u.username === username)) return;

  const salt = bcrypt.genSaltSync(12); // High salt rounds
  const passwordHash = bcrypt.hashSync(password, salt);

  const newAdmin: AdminUser = {
    id: Date.now().toString(),
    username,
    passwordHash,
    role: 'admin'
  };

  await writeJSON(FILE, [...admins, newAdmin]);
  revalidatePath('/imadmin/users');
}

export async function deleteAdminAction(id: string) {
  const admins = await readJSON<AdminUser[]>(FILE);
  if (admins.length <= 1) return; // Prevent deleting last admin

  const updated = admins.filter(u => u.id !== id);
  await writeJSON(FILE, updated);
  revalidatePath('/imadmin/users');
}
