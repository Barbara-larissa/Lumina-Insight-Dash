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

export default function ChartPage() {
  const data = [
    { name: "Seg", total: 400 },
    { name: "Ter", total: 300 },
    { name: "Qua", total: 500 },
    { name: "Qui", total: 280 },
    { name: "Sex", total: 590 },
  ];

  return (
    /* CONTAINER PRINCIPAL DA PÁGINA */
    <section className="animate-in fade-in duration-500 space-y-6">
      
      {/* CABEÇALHO DA SEÇÃO */}
      <header>
        <h2 className="text-[#00F2FF] font-black tracking-[0.3em] uppercase text-sm">
          Analytics / <span className="text-white">Chart</span>
        </h2>
      </header>
      
      {/* CARD DO GRÁFICO */}
      <article className="bg-[#0B0118] p-8 rounded-[2.5rem] border border-white/5 h-[450px] shadow-2xl relative overflow-hidden">
        
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            
            {/* DEFINIÇÕES DE GRADIENTE (SVG DEFS) */}
            <defs>
              <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9D00FF" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#9D00FF" stopOpacity={0}/>
              </linearGradient>
            </defs>

            {/* CONFIGURAÇÃO DA GRADE */}
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="rgba(255,255,255,0.05)" 
              vertical={false} 
            />
            
            {/* EIXOS DO GRÁFICO */}
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
            
            {/* TOOLTIP PERSONALIZADA (ESTILO INTERNO) */}
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "#12051f", 
                border: "none", 
                borderRadius: "15px",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5)",
                color: "#fff"
              }} 
            />

            {/* ÁREA DO GRÁFICO COM EFEITO NEON */}
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