import { readJSON } from '@/lib/db';
import { AdminUser } from '@/lib/types';
import { UsersManager } from '@/components/admin/users-manager';

export default async function UsersPage() {
  const users = await readJSON<AdminUser[]>('admin.json');
  return <UsersManager users={users} />;
}
