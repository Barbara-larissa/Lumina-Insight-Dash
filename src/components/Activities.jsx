import React from 'react';

const Activities = ({ logs }) => {
  return (
    /* CONTAINER_PRINCIPAL: Onde fica todo o card de atividades */
    <div className="activities-card-wrapper bg-[#0B0118] p-8 rounded-[2.5rem] h-[450px] border border-white/5 flex flex-col w-full shadow-2xl">
      
      {/* AREA_DO_CABECALHO: Onde fica o título "System Logs" */}
      <header className="activities-header-section mb-6">
        <h4 className="activities-title text-sm font-black uppercase text-white">
          System <span className="text-[#00F2FF]">Logs</span>
        </h4>
      </header>

      {/* AREA_DE_LISTAGEM_SCROLL: A parte que permite rolar os logs */}
      <div className="activities-scrollable-list flex flex-col gap-6 overflow-y-auto pr-2 custom-scrollbar">
        {logs && logs.length > 0 ? (
          logs.map((item, index) => (
            /* LINHA_DO_LOG: O container de cada item individual */
            <article key={index} className="activities-item-row flex gap-4 items-start group">
              
              {/* INDICADOR_VISUAL: A barrinha colorida lateral com o brilho (glow) */}
              <div 
                className="activity-color-bar w-1 h-10 rounded-full shrink-0 transition-all duration-300 group-hover:scale-y-110" 
                style={{ 
                  backgroundColor: item.cor || "#9D00FF", 
                  boxShadow: `0 0 10px ${item.cor || "#9D00FF"}` 
                }} 
              />
              
              {/* CONTEUDO_TEXTUAL: Agrupa o título, data e descrição */}
              <div className="activity-text-content flex flex-col">
                <div className="activity-meta-data flex items-center gap-2">
                  <span className="activity-label text-[10px] font-black uppercase text-white/90">
                    {item.titulo}
                  </span>
                  <span className="activity-timestamp text-[8px] text-white/40 font-bold">
                    {item.data_hora} 
                  </span>
                </div>
                <p className="activity-description text-[11px] text-white/50 mt-1 leading-relaxed">
                  {item.descricao}
                </p>
              </div>

            </article>
          ))
        ) : (
          /* ESTADO_VAZIO: O que aparece enquanto os dados não chegam */
          <div className="activities-empty-state text-center mt-20">
            <p className="loading-text text-white/20 text-[10px] italic uppercase tracking-widest animate-pulse">
              Sincronizando logs...
            </p>
          </div>
        )}
      </div>

    </div>
  );
};

export default Activities;