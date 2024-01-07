import React, { FC } from "react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { RootState } from "../store";
import { useSelector } from "react-redux";
const ProductSalesChart: FC  = () => {
  interface SalesData {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
    month?: string;
  };

  const { products } = useSelector((state: RootState) => state.product);
  const months: string[] = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
  ];

  let prevMonth = "";
  const salesData: SalesData[] | undefined = products?.[0]?.sales?.map((sale: SalesData) => {
    const monthIndex: number = parseInt(sale?.weekEnding?.split("-")?.[1], 10) - 1;
    let curMonth = months[monthIndex];
    if (curMonth === prevMonth) {
      curMonth = "";
    }
    else {
      prevMonth = curMonth;
    }

    return {
      ...sale,
      month: curMonth
    };
  });

  return (<ResponsiveContainer width="99%" height="95%">
    <LineChart
      data={salesData}
      margin={{
        top: 20,
        right: 20,
        left: 20,
        bottom: 20,
      }}
    >
      <XAxis 
        dataKey="month" 
        interval={0} 
        tickLine={false} 
        padding={{ left: 10, right: 10 }} 
        ticks={months} 
        stroke="#cccccc"
        tick={{ fill: "#b0b0b0" }}
      />
      <YAxis hide={true} padding={{ top: 100, bottom: 100 }} />
      <Tooltip />
      <Line 
        type="monotone" 
        dataKey="wholesaleSales" 
        stroke="#46A8F6" 
        dot={false}
        strokeWidth={2} 
      />
      <Line 
        type="monotone" 
        dataKey="retailSales" 
        stroke="#A8B0C7" 
        dot={false}
        strokeWidth={2} 
      />
    </LineChart>
  </ResponsiveContainer>);
};
  
export default ProductSalesChart;