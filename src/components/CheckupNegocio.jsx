import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

/* ============================================================
    SUB-COMPONENTE: INDICADOR CIRCULAR
============================================================ */
const CircularMetric = ({ percent, color, label, detail }) => {
  // Garante que o valor seja um número entre 0 e 100 para o gráfico
  const validPercent = isNaN(percent) ? 0 : Math.min(Math.max(percent, 0), 100);
  const chartData = [{ value: validPercent }, { value: 100 - validPercent }];

  return (
    <div className="metric-item-wrapper flex flex-col items-center justify-center group">
      
      {/* AREA DO GRAFICO */}
      <div className="chart-container relative w-32 h-32 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              innerRadius={40}
              outerRadius={50}
              startAngle={90}
              endAngle={450}
              paddingAngle={0}
              dataKey="value"
              stroke="none"
            >
              <Cell 
                fill={color} 
                style={{ filter: `drop-shadow(0 0 8px ${color})` }} 
              />
              <Cell fill="rgba(255,255,255,0.05)" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* VALOR CENTRAL */}
        <div className="percentage-display absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-black text-white tracking-tighter">
            {validPercent}%
          </span>
        </div>
      </div>

      {/* TEXTOS INFORMATIVOS */}
      <div className="label-wrapper text-center">
        <h5 className="metric-title text-[10px] font-black tracking-[0.2em] text-white/40 uppercase mb-1 group-hover:text-white transition-colors">
          {label}
        </h5>
        <p className="metric-detail text-[9px] font-medium text-white/20 uppercase tracking-widest whitespace-nowrap">
          {detail}
        </p>
      </div>
    </div>
  );
};

/* ============================================================
    COMPONENTE PRINCIPAL: CHECK-UP NEGÓCIO
============================================================ */
const CheckupNegocio = ({ status }) => {
  
  // Lista de fallback caso a API demore ou falhe
  const metricsList = (status && status.length > 0) ? status : [
    { label: "MARGEM LÍQUIDA", valor: 0, cor: "#00F2FF", subtitulo: "SINCRO..." },
    { label: "MARGEM BRUTA", valor: 0, cor: "#9D00FF", subtitulo: "SINCRO..." },
    { label: "CUSTO FIXO", valor: 0, cor: "#FF00E5", subtitulo: "SINCRO..." },
    { label: "RETORNO ROI", valor: 0, cor: "#22C55E", subtitulo: "SINCRO..." }
  ];

  const isOnline = status && status.length > 0;

  return (
    <article className="checkup-main-card bg-[#0B0118] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl h-full flex flex-col relative overflow-hidden">
      
      {/* EFEITO DE LUZ (GLOW) NO FUNDO */}
      <div className="bg-glow-effect absolute -top-24 -right-24 w-48 h-48 bg-[#9D00FF]/10 blur-[80px] rounded-full pointer-events-none" />

      {/* TOPO DO CARD */}
      <div className="card-header flex justify-between items-start mb-10 relative z-10">
        <div className="header-info">
          <h4 className="title text-sm font-black uppercase tracking-[0.3em] text-white">
            Check-up <span className="text-[#00F2FF]">Negócio</span>
          </h4>
          <p className="subtitle text-[9px] text-white/20 uppercase font-bold mt-1 tracking-widest">
            Unidade de Inteligência Financeira
          </p>
        </div>

        <div className="status-badge px-3 py-1 bg-white/5 rounded-full border border-white/10">
          <span className={`status-text text-[8px] font-black tracking-widest uppercase ${isOnline ? 'text-[#00F2FF]' : 'text-red-500'}`}>
            {isOnline ? 'Stable Connection' : 'Database Offline'}
          </span>
        </div>
      </div>

      {/* GRID DE METRICAS */}
      <div className="metrics-grid flex-1 grid grid-cols-2 md:grid-cols-4 gap-6 items-center relative z-10 min-h-[250px]">
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

      {/* RODAPÉ E INDICADORES DE ATIVIDADE */}
      <div className="card-footer mt-8 pt-6 border-t border-white/5 flex justify-between items-center relative z-10">
        <div className="activity-indicators flex gap-4">
          <div className="indicator-item flex items-center gap-2">
            <div className="status-dot w-1.5 h-1.5 rounded-full bg-[#00F2FF] animate-pulse" />
            <span className="indicator-label text-[8px] font-bold text-white/30 uppercase tracking-tighter">Fluxo: Ativo</span>
          </div>
          <div className="indicator-item flex items-center gap-2">
            <div className="status-dot w-1.5 h-1.5 rounded-full bg-[#FF00E5] animate-pulse" />
            <span className="indicator-label text-[8px] font-bold text-white/30 uppercase tracking-tighter">Sinc: 5s</span>
          </div>
        </div>

        <button className="cta-button text-[9px] font-black text-white/40 uppercase tracking-widest hover:text-[#00F2FF] transition-colors">
          Relatório Detalhado →
        </button>
      </div>
    </article>
  );
};

export default CheckupNegocio;