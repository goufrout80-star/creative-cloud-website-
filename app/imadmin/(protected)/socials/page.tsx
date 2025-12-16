import { readJSON } from '@/lib/db';
import { Settings } from '@/lib/types';
import { updateSocialsAction } from '@/app/actions/settings';
import { Save, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

export default async function SocialsPage() {
  const settings = await readJSON<Settings>('settings.json');

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-2">Social Media</h1>
      <p className="text-gray-400 mb-8">Manage footer social links.</p>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
        <form action={updateSocialsAction} className="space-y-6">
          
          {/* Instagram */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-400">
                <Instagram className="w-4 h-4" /> Instagram
              </label>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="showInstagram" defaultChecked={settings.showSocials.instagram} />
                <span className="text-xs text-gray-500">Visible</span>
              </div>
            </div>
            <input name="instagram" defaultValue={settings.socials.instagram} className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3" />
          </div>

          {/* Facebook */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-400">
                <Facebook className="w-4 h-4" /> Facebook
              </label>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="showFacebook" defaultChecked={settings.showSocials.facebook} />
                <span className="text-xs text-gray-500">Visible</span>
              </div>
            </div>
            <input name="facebook" defaultValue={settings.socials.facebook} className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3" />
          </div>

          {/* YouTube */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-400">
                <Youtube className="w-4 h-4" /> YouTube
              </label>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="showYoutube" defaultChecked={settings.showSocials.youtube} />
                <span className="text-xs text-gray-500">Visible</span>
              </div>
            </div>
            <input name="youtube" defaultValue={settings.socials.youtube} className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3" />
          </div>

           {/* Twitter */}
           <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-400">
                <Twitter className="w-4 h-4" /> Twitter (X)
              </label>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="showTwitter" defaultChecked={settings.showSocials.twitter} />
                <span className="text-xs text-gray-500">Visible</span>
              </div>
            </div>
            <input name="twitter" defaultValue={settings.socials.twitter} className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3" />
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
