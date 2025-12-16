import { verifySession } from '@/lib/session';
import { redirect } from 'next/navigation';
import { readJSON } from '@/lib/db';
import { BarChart3, Users, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const session = await verifySession();
  if (!session) {
    redirect('/imadmin');
  }

  let ordersData, usersData, appsData;
  
  try {
    ordersData = await readJSON('orders.json');
  } catch {
    ordersData = [];
  }
  
  try {
    usersData = await readJSON('users.json');
  } catch {
    usersData = [];
  }
  
  try {
    appsData = await readJSON('apps.json');
  } catch {
    appsData = [];
  }

  const orders = Array.isArray(ordersData) ? ordersData : [];
  const users = Array.isArray(usersData) ? usersData : [];
  const apps = Array.isArray(appsData) ? appsData : [];

  const totalRevenue = orders.reduce((sum: number, order: any) => sum + (order.amount || 0), 0);
  const totalOrders = orders.length;
  const totalUsers = users.length;
  const totalApps = apps.length;

  const recentOrders = orders.slice(-5).reverse();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-blue-500" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <h3 className="text-gray-400 text-sm mb-1">Total Revenue</h3>
          <p className="text-2xl font-bold text-white">${totalRevenue.toFixed(2)}</p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-purple-500" />
            </div>
          </div>
          <h3 className="text-gray-400 text-sm mb-1">Total Orders</h3>
          <p className="text-2xl font-bold text-white">{totalOrders}</p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-green-500" />
            </div>
          </div>
          <h3 className="text-gray-400 text-sm mb-1">Total Users</h3>
          <p className="text-2xl font-bold text-white">{totalUsers}</p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-orange-500" />
            </div>
          </div>
          <h3 className="text-gray-400 text-sm mb-1">Total Apps</h3>
          <p className="text-2xl font-bold text-white">{totalApps}</p>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">Recent Orders</h2>
        {recentOrders.length === 0 ? (
          <p className="text-gray-400 text-center py-8">No orders yet</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Order ID</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Customer</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Amount</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order: any, index: number) => (
                  <tr key={order.id || index} className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white font-mono text-sm">
                      {order.id ? `#${order.id.slice(0, 8)}` : `#${index + 1}`}
                    </td>
                    <td className="py-3 px-4 text-white">{order.customerName || order.email || 'N/A'}</td>
                    <td className="py-3 px-4 text-white">${(order.amount || 0).toFixed(2)}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        order.status === 'completed' ? 'bg-green-500/10 text-green-500' :
                        order.status === 'pending' ? 'bg-yellow-500/10 text-yellow-500' :
                        'bg-gray-500/10 text-gray-500'
                      }`}>
                        {order.status || 'pending'}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-400 text-sm">
                      {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : 'N/A'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
