import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import styles from '../styles/modules/checkupnegocio.module.css';

const CircularMetric = ({ percent, color, label, detail }) => {
  const validPercent = isNaN(percent) ? 0 : Math.min(Math.max(percent, 0), 100);
  const chartData = [{ value: validPercent }, { value: 100 - validPercent }];

  return (
    <div className={styles.metricWrapper}>
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              innerRadius={40} // Reduzi um pouco para manter a proporção
              outerRadius={48} // 🔥 Aqui o segredo: de 55 para 48
              startAngle={90}
              endAngle={450}
              dataKey="value"
              stroke="none"
            >
              <Cell
                fill={color}
                style={{ filter: `drop-shadow(0 0 10px ${color})` }}
              />
              <Cell fill="rgba(255,255,255,0.05)" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className={styles.percentageDisplay}>
          <span className="text-2xl font-black text-white tracking-tighter">
            {validPercent}%
          </span>
        </div>
      </div>

      {/* AQUI ESTÁ O SEGREDO: O Wrapper do Texto */}
      <div className={styles.labelWrapper}>
        <h5 className={styles.metricTitle}>{label}</h5>
        <p className="text-[8px] font-bold text-white/20 uppercase tracking-widest">
          {detail}
        </p>
      </div>
    </div>
  );
};
const CheckupNegocio = ({ status }) => {
  const metricsList = (status && status.length > 0) ? status : [
    { label: "MARGEM LÍQUIDA", valor: 0, cor: "#00F2FF", subtitulo: "SINCRO..." },
    { label: "MARGEM BRUTA", valor: 0, cor: "#9D00FF", subtitulo: "SINCRO..." },
    { label: "CUSTO FIXO", valor: 0, cor: "#FF00E5", subtitulo: "SINCRO..." },
    { label: "RETORNO ROI", valor: 0, cor: "#22C55E", subtitulo: "SINCRO..." }
  ];

  const isOnline = status && status.length > 0;

  return (
    <article className={styles.mainCard}>
      <div className={styles.glowEffect} />

      <div className="flex justify-between items-start mb-10 relative z-10">
        <div>
          <h4 className="text-sm font-black uppercase tracking-[0.3em] text-white">
            Check-up <span className="text-[#00F2FF]">Negócio</span>
          </h4>
          <p className="text-[9px] text-white/20 uppercase font-bold mt-1 tracking-widest">
            Unidade de Inteligência Financeira
          </p>
        </div>

        <div className={styles.statusBadge}>
          <span className={`text-[8px] font-black tracking-widest uppercase ${isOnline ? 'text-[#00F2FF]' : 'text-red-500'}`}>
            {isOnline ? 'Stable Connection' : 'Database Offline'}
          </span>
        </div>
      </div>

      <div className={styles.metricsGrid}>
        {metricsList.map((metric, index) => (
          <CircularMetric
            key={index}
            percent={Number(metric.valor)}
            color={metric.cor}
            label={metric.label}
            detail={metric.subtitulo}
          />
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center relative z-10">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00F2FF] animate-pulse" />
            <span className="text-[8px] font-bold text-white/30 uppercase">Fluxo: Ativo</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF00E5] animate-pulse" />
            <span className="text-[8px] font-bold text-white/30 uppercase">Sinc: 5s</span>
          </div>
        </div>

        <button className="text-[9px] font-black text-white/40 uppercase tracking-widest hover:text-[#00F2FF] transition-colors">
          Relatório Detalhado →
        </button>
      </div>
    </article>
  );
};

export default CheckupNegocio;