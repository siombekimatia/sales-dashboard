'use client';
import { useState, useEffect } from 'react';
import { SalesChart } from '@/components/organisms/SalesChart';
import { Button } from '@/components/atoms/Button';
import { getSalesData, SalesData } from '@/lib/data';

export default function Dashboard() {
  const [data, setData] = useState<SalesData[]>([]);
  const [chartType, setChartType] = useState('bar');
  const [threshold, setThreshold] = useState(0);

  useEffect(() => {
    // API Integration: Replace with your actual API endpoint if needed
    const fetchData = async () => {
      const result = await getSalesData(); 
      setData(result);
    };
    fetchData();
  }, []);

  const filteredData = data.filter((item) => item.sales >= threshold);

  return (
    <main className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Sales Dashboard</h1>
      
      <div className="flex gap-4 mb-8">
        <input 
          type="number" 
          placeholder="Min Threshold" 
          className="border p-2 rounded"
          onChange={(e) => setThreshold(Number(e.target.value))}
        />
        <Button onClick={() => setChartType('bar')}>Bar</Button>
        <Button onClick={() => setChartType('line')}>Line</Button>
        <Button onClick={() => setChartType('pie')}>Pie</Button>
      </div>

      <SalesChart data={filteredData} chartType={chartType} />
    </main>
  );
}