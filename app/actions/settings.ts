'use server';

import { readJSON, writeJSON } from '@/lib/db';
import { Settings } from '@/lib/types';
import { revalidatePath } from 'next/cache';
import { sanitizeInput } from '@/lib/security';

const FILE = 'settings.json';

export async function updateSettingsAction(formData: FormData) {
  const settings = await readJSON<Settings>(FILE);

  const newSettings: Settings = {
    ...settings,
    storeName: sanitizeInput(formData.get('storeName') as string),
    supportEmail: sanitizeInput(formData.get('supportEmail') as string),
    whatsappNumber: sanitizeInput(formData.get('whatsappNumber') as string),
    maintenanceMode: formData.get('maintenanceMode') === 'on',
  };

  await writeJSON(FILE, newSettings);
  revalidatePath('/imadmin/settings');
  revalidatePath('/');
}

export async function updateSocialsAction(formData: FormData) {
  const settings = await readJSON<Settings>(FILE);

  const newSettings: Settings = {
    ...settings,
    socials: {
      instagram: sanitizeInput(formData.get('instagram') as string),
      facebook: sanitizeInput(formData.get('facebook') as string),
      youtube: sanitizeInput(formData.get('youtube') as string),
      twitter: sanitizeInput(formData.get('twitter') as string),
    },
    showSocials: {
      instagram: formData.get('showInstagram') === 'on',
      facebook: formData.get('showFacebook') === 'on',
      youtube: formData.get('showYoutube') === 'on',
      twitter: formData.get('showTwitter') === 'on',
    }
  };

  await writeJSON(FILE, newSettings);
  revalidatePath('/imadmin/socials');
  revalidatePath('/');
}
