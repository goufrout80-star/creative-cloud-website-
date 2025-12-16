import { LoginForm } from '@/components/admin/login-form';
import { ShieldCheck } from 'lucide-react';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Restricted Access",
  robots: "noindex, nofollow",
};

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-950 text-white p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Admin Portal</h1>
          <p className="text-gray-400">Secure access for todayfilmmakers staff</p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl">
          <LoginForm />
        </div>

        <div className="mt-8 text-center text-xs text-gray-600">
          &copy; {new Date().getFullYear()} todayfilmmakers. All rights reserved.
        </div>
      </div>
    </main>
  );
}
