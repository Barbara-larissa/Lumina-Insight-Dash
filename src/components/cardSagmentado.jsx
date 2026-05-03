import React, { useMemo } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

/**
 * Card Segmentado - Versão Financeira LariDev
 * Cores automáticas para Receita, Despesas e Lucro.
 */
function CardSegmentado({ valor, percentual, titulo, subtitulo, corDestaque }) {
  
  // Lógica de cores inteligente baseada nos novos labels financeiros
  const obterCorPorContexto = () => {
    if (corDestaque) return corDestaque;
    
    const t = titulo?.toLowerCase() || "";
    
    if (t.includes("receita")) return "#00F2FF";      // Ciano para Receita
    if (t.includes("despesa")) return "#FF00E5";      // Rosa/Magenta para Despesas
    if (t.includes("lucro") || t.includes("líquido")) return "#00FF41"; // Verde para Lucro
    
    return "#7000FF"; // Roxo padrão para outros casos
  };

  const corFinal = obterCorPorContexto();
  const segmentos = 35;
  const ativos = Math.round((Number(percentual) / 100) * segmentos);

  const dados = useMemo(() => {
    return Array.from({ length: segmentos }, (_, i) => {
      const ativo = i < ativos;
      let cor = "#1E0B36";
      if (ativo) cor = corFinal;
      return { valor: 1, cor, ativo };
    });
  }, [ativos, corFinal]);

  const formatarTamanhoTexto = (texto) => {
    const stringValor = texto?.toString() || "";
    if (stringValor.length > 12) return "text-lg"; 
    if (stringValor.length > 9) return "text-xl";
    if (stringValor.length > 6) return "text-2xl";
    return "text-4xl"; 
  };

  return (
    <div className="bg-[#0B0118] p-8 rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col h-full min-w-[280px] md:min-w-[320px] relative transition-all duration-500 hover:border-white/20 group">
      
      {/* INDICADOR LIVE */}
      <div className="absolute top-6 right-8 flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
        </span>
        <span className="text-[10px] font-black text-red-500 tracking-[0.2em] uppercase">Live</span>
      </div>

      <div className="flex flex-col justify-center flex-1 mt-4">
        
        {/* GRÁFICO CIRCULAR SEGMENTADO */}
        <div className="h-56 w-full relative flex items-center justify-center mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dados}
                dataKey="valor"
                cx="50%"
                cy="50%"
                innerRadius={75} 
                outerRadius={90} 
                paddingAngle={3}
                startAngle={225}
                endAngle={-45}
                stroke="none"
              >
                {dados.map((item, i) => (
                  <Cell
                    key={i}
                    fill={item.cor}
                    style={{
                      filter: item.ativo ? `drop-shadow(0 0 12px ${item.cor}88)` : "none",
                      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* VALOR CENTRALIZADO */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
            <span className={`text-white font-black tracking-tighter leading-none transition-all duration-300 ${formatarTamanhoTexto(valor)}`}>
              {valor}
            </span>
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-2 opacity-50">
              Finance Check
            </span>
          </div>
        </div>

        {/* TEXTOS DOS CARDS */}
        <div className="text-left px-2">
          <h3 className="text-2xl font-black uppercase tracking-tighter mb-1 italic" style={{ color: corFinal }}>
            {titulo}
          </h3>
          <p className="text-slate-400 text-xs font-medium leading-tight max-w-[95%]">
            {subtitulo}
          </p>
        </div>

      </div>
    </div>
  );
}

export default CardSegmentado;