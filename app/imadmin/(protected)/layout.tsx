import { AdminSidebar } from '@/components/admin/sidebar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dashboard | Restricted",
  robots: "noindex, nofollow",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      <AdminSidebar />
      <main className="pl-64">
        <div className="container mx-auto p-8 max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  );
}
