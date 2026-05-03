import React from 'react';

const TabelaMetas = ({ status = [] }) => {
  // Dados de fallback caso a API demore ou falhe
  const dados = (status && status.length > 0) ? status : [
    { label: "Meta de Faturamento", percentual: "0%", cor_referencia: "#FF00E5" },
    { label: "Meta de Lucro", percentual: "0%", cor_referencia: "#00F2FF" },
    { label: "Redução de Despesas", percentual: "0%", cor_referencia: "#00FF88" }
  ];

  return (
    <div className="relative overflow-hidden h-full flex flex-col justify-between p-6 bg-[#1A0B2E]/50 border border-white/5 rounded-[30px] backdrop-blur-md transition-all hover:border-white/10">
      
      {/* Cabeçalho */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-black italic tracking-tighter uppercase leading-none">
            <span className="text-[#FF00E5] drop-shadow-[0_0_8px_#FF00E5]">METAS</span> 
            <span className="text-white ml-2">FINANCEIRAS</span>
          </h3>
          <p className="text-[9px] text-white/40 uppercase tracking-[0.3em] mt-1">Sincronizado via PHP</p>
        </div>
        
        {/* Indicador Online/Offline */}
        <div className="flex items-center gap-2 bg-black/40 px-2.5 py-1 rounded-full border border-white/5">
          <div className={`w-1.5 h-1.5 rounded-full ${status.length > 0 ? 'bg-green-500 shadow-[0_0_5px_#22c55e]' : 'bg-red-500 animate-pulse'}`}></div>
          <span className="text-[9px] font-bold text-white/80 tracking-widest">
            {status.length > 0 ? 'ONLINE' : 'OFFLINE'}
          </span>
        </div>
      </div>

      {/* Listagem das Metas */}
      <div className="space-y-6 flex-1 flex flex-col justify-center">
        {dados.slice(0, 3).map((meta, index) => {
          // parseInt ignora o "%" e pega só o número (ex: "75%" vira 75)
          const valorNumerico = parseInt(meta.percentual) || 0;
          const corNeon = meta.cor_referencia || '#FF00E5';

          return (
            <div key={meta.id || index} className="group">
              <div className="flex justify-between items-end mb-2">
                <span className="text-[11px] font-bold text-white/70 uppercase tracking-wider">
                  {meta.label}
                </span>
                <span className="text-[12px] font-black italic" style={{ color: corNeon }}>
                  {valorNumerico}%
                </span>
              </div>
              
              {/* Barra de Progresso com cor vinda do Banco */}
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                <div 
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${valorNumerico}%`,
                    backgroundColor: corNeon,
                    boxShadow: `0 0 12px ${corNeon}88` 
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabelaMetas;