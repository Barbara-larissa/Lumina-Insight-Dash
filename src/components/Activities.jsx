import React from 'react';

const Activities = ({ logs }) => {
  
  return (
    /* CONTAINER PRINCIPAL DO CARD */
    <div className="bg-[#0B0118] p-8 rounded-[2.5rem] h-[450px] border border-white/5 flex flex-col w-full shadow-2xl">
      
      {/* CABEÇALHO / TÍTULO */}
      <header className="mb-6">
        <h4 className="text-sm font-black uppercase text-white">
          System <span className="text-[#00F2FF]">Logs</span>
        </h4>
      </header>

      {/* ÁREA DE LISTAGEM (SCROLL) */}
      <div className="flex flex-col gap-6 overflow-y-auto pr-2 custom-scrollbar">
        {logs && logs.length > 0 ? (
          logs.map((item, index) => (
            
            /* ITEM DA ATIVIDADE - Corrigido para não ser um bloco gigante */
            <article key={index} className="flex gap-4 items-start group">
              
              {/* INDICADOR VISUAL (GLOW) */}
              <div 
                className="w-1 h-10 rounded-full shrink-0 transition-all duration-300 group-hover:scale-y-110" 
                style={{ 
                  backgroundColor: item.cor || "#9D00FF", 
                  boxShadow: `0 0 10px ${item.cor || "#9D00FF"}` 
                }} 
              />
              
              {/* CONTEÚDO DO LOG */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase text-white/90">
                    {item.titulo}
                  </span>
                  <span className="text-[8px] text-white/40 font-bold">
                    {item.data_hora} 
                  </span>
                </div>
                <p className="text-[11px] text-white/50 mt-1 leading-relaxed">
                  {item.descricao}
                </p>
              </div>

            </article>
          ))
        ) : (
          /* ESTADO DE CARREGAMENTO */
          <div className="text-center mt-20">
            <p className="text-white/20 text-[10px] italic uppercase tracking-widest animate-pulse">
              Sincronizando logs...
            </p>
          </div>
        )}
      </div>

    </div>
  );
};

export default Activities;