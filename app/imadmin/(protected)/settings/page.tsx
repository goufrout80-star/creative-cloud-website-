import { readJSON } from '@/lib/db';
import { Settings } from '@/lib/types';
import { updateSettingsAction } from '@/app/actions/settings';
import { Save } from 'lucide-react';

export default async function SettingsPage() {
  const settings = await readJSON<Settings>('settings.json');

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-2">Global Settings</h1>
      <p className="text-gray-400 mb-8">Manage store configuration.</p>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
        <form action={updateSettingsAction} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Store Name</label>
            <input name="storeName" defaultValue={settings.storeName} className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Support Email</label>
            <input name="supportEmail" defaultValue={settings.supportEmail} className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">WhatsApp Number</label>
            <input name="whatsappNumber" defaultValue={settings.whatsappNumber} className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3" />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <input 
              type="checkbox" 
              name="maintenanceMode" 
              id="maintenance" 
              defaultChecked={settings.maintenanceMode}
              className="w-5 h-5 bg-gray-800 border-gray-700 rounded"
            />
            <label htmlFor="maintenance" className="text-gray-300">Enable Maintenance Mode (Show 503 Page)</label>
          </div>

          <button type="submit" className="bg-primary hover:bg-red-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors mt-4">
            <Save className="w-5 h-5" />
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
