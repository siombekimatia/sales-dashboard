'use client';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend 
} from 'recharts';
import { SalesData } from '@/lib/data';

interface SalesChartProps {
  data: SalesData[];
  chartType: string;
}

const COLORS = { '2022': '#3b82f6', '2023': '#22c55e', '2024': '#eab308' };

export const SalesChart = ({ data, chartType }: SalesChartProps) => {
  
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        {chartType === 'bar' ? (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[entry.year as keyof typeof COLORS] || '#8884d8'} />
              ))}
            </Bar>
          </BarChart>
        ) : chartType === 'line' ? (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} />
          </LineChart>
        ) : (
          <PieChart>
            <Pie data={data} dataKey="sales" nameKey="year" cx="50%" cy="50%" outerRadius={100} label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[entry.year as keyof typeof COLORS] || '#8884d8'} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};