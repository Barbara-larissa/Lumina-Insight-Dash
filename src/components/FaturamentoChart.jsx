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
// Importação do módulo de estilos
import styles from "../styles/modules/faturamentochart.module.css";

export default function FaturamentoChart({ grafico, dataLinha }) {
  
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
    <div className={styles.container}>
      
      {/* CABEÇALHO COM CSS MODULES */}
      <div className={styles.header}>
        <div>
          <h4 className={styles.title}>Fluxo de Pedidos</h4>
          <p className={styles.subtitle}>Análise por Hora</p>
        </div>
        <div className={styles.badgeLive}>
          <span className={styles.badgeText}>Ao Vivo</span>
        </div>
      </div>

      {/* ÁREA DO GRÁFICO BLINDADA */}
      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={dadosParaExibir}>
            
            <defs>
              <linearGradient id="areaColorCiano" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00F2FF" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#00F2FF" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid 
              vertical={false} 
              stroke="rgba(255,255,255,.03)" 
            />
            
            <XAxis
              dataKey="label"
              stroke="rgba(255,255,255,0.2)"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              dy={10}
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