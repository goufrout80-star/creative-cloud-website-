'use server';

import { readJSON, writeJSON } from '@/lib/db';
import { AppData } from '@/lib/types';
import { revalidatePath } from 'next/cache';

const DB_FILE = 'apps.json';

export async function addAppAction(formData: FormData) {
  const name = formData.get('name') as string;
  const short = formData.get('short') as string;
  const color = formData.get('color') as string;

  if (!name || !short) return;

  const apps = await readJSON<AppData[]>(DB_FILE);
  const newApp: AppData = {
    id: Date.now().toString(),
    name,
    short,
    color: color || '#31A8FF',
    visible: true,
  };

  apps.push(newApp);
  await writeJSON(DB_FILE, apps);
  revalidatePath('/imadmin/apps');
  revalidatePath('/'); // Update home page
  revalidatePath('/creativecloudsub'); // Update software page
}

export async function updateAppAction(id: string, formData: FormData) {
  const name = formData.get('name') as string;
  const short = formData.get('short') as string;
  const color = formData.get('color') as string;

  const apps = await readJSON<AppData[]>(DB_FILE);
  const index = apps.findIndex((a) => a.id === id);

  if (index !== -1) {
    apps[index] = { ...apps[index], name, short, color };
    await writeJSON(DB_FILE, apps);
    revalidatePath('/imadmin/apps');
    revalidatePath('/');
    revalidatePath('/creativecloudsub');
  }
}

export async function toggleAppVisibilityAction(id: string) {
  const apps = await readJSON<AppData[]>(DB_FILE);
  const index = apps.findIndex((a) => a.id === id);

  if (index !== -1) {
    apps[index].visible = !apps[index].visible;
    await writeJSON(DB_FILE, apps);
    revalidatePath('/imadmin/apps');
    revalidatePath('/');
    revalidatePath('/creativecloudsub');
  }
}

export async function deleteAppAction(id: string) {
  let apps = await readJSON<AppData[]>(DB_FILE);
  apps = apps.filter((a) => a.id !== id);
  await writeJSON(DB_FILE, apps);
  revalidatePath('/imadmin/apps');
  revalidatePath('/');
  revalidatePath('/creativecloudsub');
}
