'use client';

import { useState, useTransition } from 'react';
import { AppData } from '@/lib/types';
import { addAppAction, deleteAppAction, toggleAppVisibilityAction, updateAppAction } from '../../app/actions/apps';
import { Plus, Trash2, Eye, EyeOff, Edit2, Save, X, Loader2 } from 'lucide-react';

export function AppsManager({ initialApps }: { initialApps: AppData[] }) {
  const [isPending, startTransition] = useTransition();
  const [editingId, setEditingId] = useState<string | null>(null);

  // Add Form State
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Manage Apps</h1>
          <p className="text-gray-400">Edit the apps shown in "What's Included".</p>
        </div>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="bg-primary hover:bg-red-600 text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2 transition-colors"
        >
          {isAdding ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          {isAdding ? 'Cancel' : 'Add App'}
        </button>
      </div>

      {isAdding && (
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl animate-in slide-in-from-top-2">
          <h3 className="font-bold mb-4">Add New App</h3>
          <form action={async (formData) => {
            startTransition(async () => {
              await addAppAction(formData);
              setIsAdding(false);
            });
          }} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="space-y-2">
              <label className="text-xs text-gray-500">App Name</label>
              <input name="name" required placeholder="e.g. Photoshop" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm" />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-gray-500">Short Code</label>
              <input name="short" required placeholder="e.g. Ps" maxLength={2} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm" />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-gray-500">Color (Hex)</label>
              <input name="color" type="color" defaultValue="#31A8FF" className="w-full h-9 bg-gray-800 border border-gray-700 rounded-lg px-1 py-1 cursor-pointer" />
            </div>
            <button type="submit" disabled={isPending} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-bold text-sm h-9">
              {isPending ? 'Saving...' : 'Save App'}
            </button>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {initialApps.map((app) => (
          <div key={app.id} className={`bg-gray-900 border ${app.visible ? 'border-gray-800' : 'border-red-900/30 opacity-60'} p-4 rounded-2xl relative group transition-all`}>
            
            {editingId === app.id ? (
              <form action={async (formData) => {
                startTransition(async () => {
                  await updateAppAction(app.id, formData);
                  setEditingId(null);
                });
              }} className="space-y-3">
                 <input name="name" defaultValue={app.name} className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm" />
                 <div className="flex gap-2">
                   <input name="short" defaultValue={app.short} className="w-1/2 bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm" />
                   <input name="color" type="color" defaultValue={app.color} className="w-1/2 h-7 bg-gray-800 border border-gray-700 rounded px-1" />
                 </div>
                 <div className="flex gap-2 pt-2">
                   <button type="submit" className="bg-green-600 text-white p-1.5 rounded hover:bg-green-700"><Save className="w-4 h-4" /></button>
                   <button type="button" onClick={() => setEditingId(null)} className="bg-gray-700 text-white p-1.5 rounded hover:bg-gray-600"><X className="w-4 h-4" /></button>
                 </div>
              </form>
            ) : (
              <>
                <div className="flex justify-between items-start mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold"
                    style={{ backgroundColor: app.color, color: '#000' }}
                  >
                    {app.short}
                  </div>
                  <div className="flex gap-1">
                    <button 
                      onClick={() => setEditingId(app.id)}
                      className="p-1.5 text-gray-500 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => startTransition(() => toggleAppVisibilityAction(app.id))}
                      className={`p-1.5 rounded-lg transition-colors ${app.visible ? 'text-blue-400 hover:bg-blue-400/10' : 'text-gray-600 hover:text-gray-400'}`}
                    >
                      {app.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <h3 className="font-bold truncate">{app.name}</h3>
                <div className="mt-4 pt-4 border-t border-gray-800 flex justify-end">
                  <button 
                     onClick={() => {
                       if(confirm('Delete this app?')) startTransition(() => deleteAppAction(app.id));
                     }}
                     className="text-red-400 hover:text-red-300 text-xs flex items-center gap-1 hover:underline"
                  >
                    <Trash2 className="w-3 h-3" /> Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
