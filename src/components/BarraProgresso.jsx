import React from 'react';

const PerformanceBars = ({ barras, dataBarras }) => {
  // Ajustado para refletir Despesas Financeiras conforme sua nova prioridade
  const categoriasDespesas = [
    { label: "Aluguel", valor: "100%", cor: "#FF00E5" },       // Rosa Neon
    { label: "Fornecedores", valor: "85%", cor: "#00F2FF" },   // Ciano
    { label: "Marketing", valor: "45%", cor: "#7000FF" },     // Roxo
    { label: "Funcionários", valor: "95%", cor: "#00FF41" }    // Verde
  ];

  // Prioriza dados vindos da API, caso contrário usa o padrão financeiro acima
  const dadosExibicao = (barras && barras.length ? barras : (dataBarras || categoriasDespesas));

  return (
    <div className="perf-bars-main-container bg-[#0B0118] p-8 rounded-[2.5rem] h-[350px] border border-white/5 flex flex-col w-full transition-all hover:border-white/10">

      <div className="perf-header-wrapper mb-6">
        <h4 className="perf-title text-sm font-black uppercase tracking-[0.25em] text-white">
          Despesas por <span className="perf-highlight text-[#FF00E5]">Categoria</span>
        </h4>
        <p className="perf-subtitle text-white/20 text-[9px] uppercase tracking-[0.1em] mt-1 font-bold">
          Fluxo de Saída Mensal
        </p>
      </div>

      <div className="perf-bars-display-area flex flex-row gap-4 flex-1 items-end justify-between pb-2">
        {dadosExibicao.map((item, index) => {
          const valorLimpo = Number(String(item.valor).replace("%", "")) || 0;
          // Calcula quantos dos 15 blocos devem ser acesos
          const limiteAtivo = Math.round((valorLimpo / 100) * 15);
          
          return (
            <div key={index} className="perf-column-unit flex flex-col items-center h-full w-full max-w-[50px]">
              
              <span className="text-[10px] font-bold text-white/60 mb-2 tabular-nums">
                {valorLimpo}%
              </span>

              <div className="perf-stack-segments flex-1 w-full flex flex-col-reverse gap-[2px]">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="perf-segment-block w-full h-full rounded-[1px]"
                    style={{
                      // Acende o bloco se ele estiver dentro do limite calculado
                      backgroundColor: i < limiteAtivo ? item.cor : "#140624",
                      opacity: i < limiteAtivo ? 1 : 0.1,
                      boxShadow: i < limiteAtivo ? `0 0 10px ${item.cor}44` : "none",
                      minHeight: "8px"
                    }}
                  />
                ))}
              </div>

              <span className="perf-label-text text-[9px] text-white/50 uppercase font-black mt-4 whitespace-nowrap text-center tracking-tighter">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PerformanceBars;