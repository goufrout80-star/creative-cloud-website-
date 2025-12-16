'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function DashboardCharts({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#e31b2c" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#e31b2c" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
        <XAxis 
          dataKey="name" 
          stroke="#666" 
          fontSize={12} 
          tickLine={false} 
          axisLine={false} 
        />
        <YAxis 
          stroke="#666" 
          fontSize={12} 
          tickLine={false} 
          axisLine={false} 
          tickFormatter={(value) => `$${value}`} 
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#111', borderColor: '#333', borderRadius: '8px' }}
          itemStyle={{ color: '#fff' }}
        />
        <Area 
          type="monotone" 
          dataKey="sales" 
          stroke="#e31b2c" 
          strokeWidth={2}
          fillOpacity={1} 
          fill="url(#colorSales)" 
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
