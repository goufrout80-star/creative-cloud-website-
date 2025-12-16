'use client';

import { useActionState } from 'react';
import { loginAction } from '@/app/actions/auth';
import { Loader2, Lock, User } from 'lucide-react';

const initialState = {
  message: '',
};

export function LoginForm() {
  const [state, action, isPending] = useActionState(loginAction, initialState);

  return (
    <form action={action} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">Username</label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            name="username"
            type="text"
            required
            className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            placeholder="Enter username"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            name="password"
            type="password"
            required
            className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            placeholder="Enter password"
          />
        </div>
      </div>

      {state?.message && (
        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center">
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-primary hover:bg-red-600 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Sign In to Dashboard'}
      </button>
    </form>
  );
}
