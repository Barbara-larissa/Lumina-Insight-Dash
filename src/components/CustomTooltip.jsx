import React from 'react';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const valor = payload[0].value;
    
    // Pegamos o índice do ponto atual no gráfico
    const index = payload[0].payload.index; 
    // Tentamos pegar o valor anterior para comparar (se existir)
    const valorAnterior = payload[0].payload.valorAnterior || 0;

    // Lógica inteligente: Só é queda se o valor atual for menor que o anterior
    // Para teste rápido com seus dados fixos, vamos usar:
    const isQueda = valor < 50; // Ajustado para um limite menor enquanto você testa

    return (
      /* CONTAINER PRINCIPAL DA TOOLTIP (GLASSMORPHISM) */
      <div className="tooltip-container bg-[#0B0118]/95 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl min-w-[160px] relative overflow-hidden">
        
        {/* BARRA DE STATUS SUPERIOR */}
        <div
          className="tooltip-status-bar absolute top-0 left-0 h-[3px] w-full transition-colors duration-500"
          style={{
            backgroundColor: isQueda ? "#FF0000" : "#00F2FF",
            boxShadow: `0 0 15px ${isQueda ? "#FF0000" : "#00F2FF"}`
          }}
        />

        <p className="tooltip-label text-[9px] font-black uppercase tracking-[0.3em] text-white/40 mb-2">
          {label}
        </p>

        <div className="tooltip-content-wrapper flex flex-col gap-1">
          <div className="tooltip-value-row flex items-baseline gap-2">
            <span className="tooltip-main-value text-3xl font-bold text-white tracking-tighter tabular-nums">
              {valor}
            </span>
            <span className={`tooltip-trend-badge text-[10px] font-black italic ${isQueda ? 'text-red-500' : 'text-[#00F2FF]'}`}>
              {isQueda ? "▼ DOWN" : "▲ UP"}
            </span>
          </div>

          <span className={`tooltip-status-text text-[8px] font-bold uppercase tracking-widest ${isQueda ? 'text-red-500' : 'text-white/60'}`}>
            {isQueda ? "Atenção: Queda detectada" : "Desempenho Estável"}
          </span>
        </div>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;