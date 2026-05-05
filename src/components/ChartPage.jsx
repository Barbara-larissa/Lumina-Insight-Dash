import React from "react";
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid 
} from "recharts";
import styles from "../styles/modules/chartpage.module.css";

export default function ChartPage() {
  const data = [
    { name: "Seg", total: 400 },
    { name: "Ter", total: 300 },
    { name: "Qua", total: 500 },
    { name: "Qui", total: 280 },
    { name: "Sex", total: 590 },
  ];

  return (
    <section className={styles.section}>
      
      <header className={styles.header}>
        <h2 className={styles.categoryTitle}>
          Analytics / <span className={styles.mainTitle}>Chart</span>
        </h2>
      </header>
      
      <article className={styles.chartCard}>
        
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            
            <defs>
              <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9D00FF" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#9D00FF" stopOpacity={0}/>
              </linearGradient>
            </defs>

            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="rgba(255,255,255,0.05)" 
              vertical={false} 
            />
            
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#64748b', fontSize: 12}} 
              dy={10}
            />
            
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#64748b', fontSize: 12}} 
            />
            
            <Tooltip 
              contentStyle={{ border: 'none', borderRadius: '15px' }}
              wrapperClassName={styles.tooltipContainer}
            />

            <Area 
              type="monotone" 
              dataKey="total" 
              stroke="#9D00FF" 
              strokeWidth={4}
              fillOpacity={1} 
              fill="url(#colorTotal)" 
              style={{ filter: "drop-shadow(0 0 6px rgba(157, 0, 255, 0.5))" }}
            />

          </AreaChart>
        </ResponsiveContainer>

      </article>
    </section>
  );
}