'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, ShoppingCart, Users, Grid, Share2, Settings, LogOut } from 'lucide-react';
import { logoutAction } from '@/app/actions/auth';

const navItems = [
  { href: '/imadmin/dashboard', label: 'Overview', icon: LayoutDashboard },
  // { href: '/imadmin/orders', label: 'Orders', icon: ShoppingCart }, // Orders included in dashboard for now
  { href: '/imadmin/apps', label: 'Apps', icon: Grid },
  { href: '/imadmin/users', label: 'Users', icon: Users },
  { href: '/imadmin/socials', label: 'Socials', icon: Share2 },
  { href: '/imadmin/settings', label: 'Settings', icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col fixed h-full inset-y-0 left-0 z-50">
      <div className="h-16 flex items-center px-6 border-b border-gray-800">
        <span className="text-xl font-bold text-white tracking-tight">todayfilmmakers</span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <form action={logoutAction}>
          <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-xl transition-all">
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </form>
      </div>
    </aside>
  );
}
