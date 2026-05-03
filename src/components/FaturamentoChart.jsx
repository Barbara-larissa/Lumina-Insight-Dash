import React from "react";
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip 
} from "recharts";
import CustomTooltip from "./CustomTooltip";

export default function FaturamentoChart({ grafico, dataLinha }) {
  
  // Dados de exemplo focados em Pedidos por Hora (conforme sua nova meta)
  const defaultData = [
    { label: "18h", valor: 12 },
    { label: "19h", valor: 25 },
    { label: "20h", valor: 45 },
    { label: "21h", valor: 38 },
    { label: "22h", valor: 55 },
    { label: "23h", valor: 30 },
    { label: "00h", valor: 15 }
  ];

  const dadosParaExibir = grafico && grafico.length > 0 ? grafico : (dataLinha || defaultData);

  return (
    <div className="chart-faturamento-container bg-[#0B0118] p-8 rounded-[2.5rem] h-[350px] border border-white/5 w-full transition-all hover:border-white/10">
      
      {/* CABEÇALHO ATUALIZADO: PEDIDOS POR HORA */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h4 className="chart-title text-xs font-black uppercase tracking-[0.3em] text-white/70">
            Fluxo de Pedidos
          </h4>
          <p className="text-[#00F2FF] text-lg font-bold italic tracking-tighter">
            Análise por Hora
          </p>
        </div>
        <div className="bg-[#00F2FF]/10 px-3 py-1 rounded-full">
          <span className="text-[#00F2FF] text-[10px] font-black uppercase tracking-widest">
            Ao Vivo
          </span>
        </div>
      </div>

      {/* ÁREA DO GRÁFICO */}
      <div className="chart-content-wrapper h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={dadosParaExibir}>
            
            {/* GRADIENTE CIANO NEON (ESTILO PREMIUM LARIDEV) */}
            <defs>
              <linearGradient id="areaColorCiano" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00F2FF" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#00F2FF" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid 
              className="chart-grid" 
              vertical={false} 
              stroke="rgba(255,255,255,.03)" 
            />
            
            <XAxis
              dataKey="label"
              stroke="rgba(255,255,255,0.2)"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              dy={10} // Espaçamento extra para não grudar no gráfico
            />
            
            <YAxis hide domain={['auto', 'auto']} />

            <Tooltip 
              content={<CustomTooltip />} 
              cursor={{ stroke: 'rgba(0, 242, 255, 0.2)', strokeWidth: 2 }} 
            />

            <Area
              type="monotone"
              dataKey="valor"
              stroke="#00F2FF"
              fill="url(#areaColorCiano)"
              strokeWidth={4}
              animationDuration={2000}
              style={{ filter: "drop-shadow(0 0 12px rgba(0, 242, 255, 0.4))" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}