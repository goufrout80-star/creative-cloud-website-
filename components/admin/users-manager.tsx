'use client';

import { useTransition } from 'react';
import { AdminUser } from '@/lib/types';
import { addAdminAction, deleteAdminAction } from '@/app/actions/users';
import { Trash2, UserPlus, Shield } from 'lucide-react';

export function UsersManager({ users }: { users: AdminUser[] }) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold mb-2">Admin Users</h1>
        <p className="text-gray-400">Manage dashboard access.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Add User */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl h-fit">
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-primary" /> Add New Admin
          </h3>
          <form action={(formData) => startTransition(() => addAdminAction(formData))} className="space-y-4">
            <div>
              <label className="text-xs text-gray-500">Username</label>
              <input name="username" required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="text-xs text-gray-500">Password</label>
              <input name="password" type="password" required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2" />
            </div>
            <button disabled={isPending} className="w-full bg-primary text-white py-2 rounded-lg font-bold text-sm">
              {isPending ? 'Adding...' : 'Create User'}
            </button>
          </form>
        </div>

        {/* User List */}
        <div className="space-y-4">
          {users.map(user => (
            <div key={user.id} className="bg-gray-900 border border-gray-800 p-4 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <div className="font-bold">{user.username}</div>
                  <div className="text-xs text-gray-500 uppercase">{user.role}</div>
                </div>
              </div>
              
              <button 
                onClick={() => {
                  if (users.length <= 1) {
                    alert('Cannot delete the last admin.');
                    return;
                  }
                  if (confirm('Delete this user?')) {
                    startTransition(() => deleteAdminAction(user.id));
                  }
                }}
                className="text-red-400 hover:bg-red-400/10 p-2 rounded-lg transition-colors"
                title="Delete User"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
