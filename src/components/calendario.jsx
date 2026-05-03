import React from 'react';

const Calendario = () => {
  const diasSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  const diasMes = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    /* CONTAINER PRINCIPAL DO CALENDÁRIO */
    <article className="bg-[#0B0118] p-8 rounded-[2.5rem] h-[350px] border border-white/5 flex flex-col w-full shadow-2xl overflow-hidden relative">
      
      {/* CABEÇALHO E NAVEGAÇÃO */}
      <header className="flex justify-between items-center mb-5 relative z-10">
        <h4 className="text-2xl font-black uppercase tracking-[0.25em] text-white">
          Abril <span className="text-[#9D00FF]">2026</span>
        </h4>

        <nav className="flex gap-2">
          <button className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-white/30 hover:bg-white/5 transition-all text-sm">
            &lt;
          </button>
          <button className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-white/30 hover:bg-white/5 transition-all text-sm">
            &gt;
          </button>
        </nav>
      </header>

      {/* DIAS DA SEMANA (LABEL) */}
      <section className="grid grid-cols-7 gap-2 mb-3 relative z-10">
        {diasSemana.map((dia, index) => (
          <span
            key={index}
            className="text-[11px] text-white/20 font-black text-center uppercase tracking-widest"
          >
            {dia}
          </span>
        ))}
      </section>

      {/* GRADE DE DIAS (CALENDAR GRID) */}
      <main className="grid grid-cols-7 gap-2 flex-1 relative z-10">
        {diasMes.map((dia) => {
          const isToday = dia === 30; // Ajustado para o dia atual

          return (
            <div
              key={dia}
              className={`
                h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-all cursor-pointer
                ${
                  isToday
                    ? 'bg-[#9D00FF] text-white shadow-[0_0_18px_#9D00FF]'
                    : 'text-white/40 hover:bg-white/5 hover:text-white'
                }
              `}
            >
              {dia}
            </div>
          );
        })}
      </main>

    </article>
  );
};

export default Calendario;