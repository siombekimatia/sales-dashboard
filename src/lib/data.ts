export interface SalesData { year: string; sales: number; }

export const getSalesData = async (): Promise<SalesData[]> => {
  try {
    // Replace with your real API endpoint
    // const res = await fetch('https://api.example.com/sales');
    // return res.json();
    
    // Simulating API delay
    return new Promise((resolve) => 
      setTimeout(() => resolve([
        { year: '2022', sales: 45000 },
        { year: '2023', sales: 52000 },
        { year: '2024', sales: 68000 },
      ]), 500)
    );
  } catch (error) {
    console.error("Failed to fetch sales data", error);
    return [];
  }
};