import { verifySession } from '@/lib/session';
import { redirect } from 'next/navigation';
import { readJSON } from '@/lib/db';
import { AppData } from '@/lib/types';
import { AppsManager } from '@/components/admin/apps-manager';

export const dynamic = 'force-dynamic';

export default async function AppsPage() {
  const session = await verifySession();
  if (!session) {
    redirect('/imadmin');
  }

  let apps: AppData[] = [];
  try {
    apps = await readJSON<AppData[]>('apps.json');
  } catch (e) {
    console.error("Failed to load apps", e);
  }

  return <AppsManager initialApps={apps} />;
}
