'use client';
import { useState } from 'react';

const salesData = [
  { year: '2022', sales: 4500 },
  { year: '2023', sales: 5200 },
  { year: '2024', sales: 6800 },
];

function SalesChart({ data, chartType }: { data: { year: string; sales: number }[]; chartType: string }) {
  // Minimal placeholder chart component
  return (
    <div className="w-full p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">{chartType.toUpperCase()} Chart</h2>
      <ul className="space-y-2">
        {data.map((d) => (
          <li key={d.year} className="flex justify-between">
            <span>{d.year}</span>
            <span className="font-mono">{d.sales}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Dashboard() {
  const [chartType, setChartType] = useState('bar');
  const [threshold, setThreshold] = useState(0);

  const filteredData = salesData.filter((item) => item.sales >= threshold);

  return (
    <main className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Sales Dashboard</h1>
      
      <div className="flex gap-4 mb-8">
        <input 
          type="number" 
          placeholder="Min Sales Threshold" 
          className="border p-2 rounded"
          onChange={(e) => setThreshold(Number(e.target.value))}
        />
        {['bar', 'line', 'pie'].map((type) => (
          <button key={type} onClick={() => setChartType(type)} className="bg-blue-600 text-white px-4 py-2 rounded capitalize">
            {type} Chart
          </button>
        ))}
      </div>

      <SalesChart data={filteredData} chartType={chartType} />
    </main>
  );
}