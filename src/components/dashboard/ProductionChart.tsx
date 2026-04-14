import { useState, useEffect } from "react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, ComposedChart,
} from "recharts";

const generateData = () => {
  const data = [];
  for (let i = 0; i <= 12; i++) {
    const minute = i * 5;
    const hour = 13 + Math.floor(minute / 60);
    const min = minute % 60;
    const total = 150 + Math.floor(Math.random() * 60);
    const falhas = 2 + Math.floor(Math.random() * 8);
    data.push({
      time: `${hour}:${min.toString().padStart(2, "0")}`,
      total,
      falhas,
    });
  }
  return data;
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-3 border border-border text-sm">
        <p className="font-mono text-foreground mb-1">{label}</p>
        <p className="text-info">Total: {payload[0].value}</p>
        <p className="text-destructive">Falhas: {payload[1].value}</p>
      </div>
    );
  }
  return null;
};

const ProductionChart = () => {
  const [data, setData] = useState(generateData);

  useEffect(() => {
    const interval = setInterval(() => setData(generateData()), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card p-5 h-full">
      <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
        Fluxo de Produção (60 min)
      </h3>
      <ResponsiveContainer width="100%" height={280}>
        <ComposedChart data={data}>
          <defs>
            <linearGradient id="totalGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 33%, 20%)" />
          <XAxis dataKey="time" tick={{ fill: "hsl(215, 20%, 65%)", fontSize: 11 }} axisLine={{ stroke: "hsl(217, 33%, 20%)" }} />
          <YAxis tick={{ fill: "hsl(215, 20%, 65%)", fontSize: 11 }} axisLine={{ stroke: "hsl(217, 33%, 20%)" }} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="total" stroke="hsl(217, 91%, 60%)" fill="url(#totalGrad)" strokeWidth={2} />
          <Line type="monotone" dataKey="falhas" stroke="hsl(0, 84%, 60%)" strokeWidth={2} strokeDasharray="5 5" dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductionChart;
