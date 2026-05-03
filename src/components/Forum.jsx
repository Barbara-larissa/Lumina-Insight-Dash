import React from "react";
import { ThumbsUp, MessageCircle } from "lucide-react";

export default function Forum() {
  const topicos = [
    { id: 1, autor: "Miguel", titulo: "Dúvida sobre integração PHP", respostas: 5, likes: 12 },
    { id: 2, autor: "Brian", titulo: "Melhores fontes para UI Neon", respostas: 8, likes: 20 },
    { id: 3, autor: "Admin", titulo: "Regras da Comunidade TechShop", respostas: 0, likes: 45 }
  ];

  return (
    /* CONTAINER PRINCIPAL DO FÓRUM */
    <section className="animate-in fade-in slide-in-from-top-4 duration-500 space-y-8">
      
      {/* CABEÇALHO DA PÁGINA */}
      <header>
        <h2 className="text-2xl font-black text-[#9D00FF] uppercase tracking-[0.4em] drop-shadow-[0_0_8px_#9D00FF]">
          Fórum da <span className="text-white">Comunidade</span>
        </h2>
      </header>

      {/* LISTAGEM DE TÓPICOS */}
      <main className="space-y-4">
        {topicos.map((topico) => (
          
          /* CARD DE TÓPICO INDIVIDUAL */
          <article 
            key={topico.id} 
            className="bg-[#0B0118] p-6 rounded-[2rem] border border-white/5 hover:border-[#9D00FF]/30 transition-all group shadow-xl"
          >
            <div className="flex justify-between items-start">
              
              {/* CONTEÚDO DO TÓPICO */}
              <div className="flex flex-col">
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-[#00F2FF] transition-colors">
                  {topico.titulo}
                </h4>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
                  Postado por: <span className="text-slate-300">{topico.autor}</span>
                </p>
              </div>

              {/* MÉTRICAS E ENGAJAMENTO */}
              <aside className="flex gap-4 text-slate-500">
                <div className="flex items-center gap-1.5">
                  <ThumbsUp size={14} />
                  <span className="text-xs font-bold">{topico.likes}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageCircle size={14} />
                  <span className="text-xs font-bold">{topico.respostas}</span>
                </div>
              </aside>

            </div>
          </article>
        ))}
      </main>
      
      {/* AÇÕES DO FÓRUM */}
      <footer>
        <button className="mt-4 px-8 py-3 bg-[#9D00FF]/20 text-[#9D00FF] border border-[#9D00FF]/40 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-[#9D00FF] hover:text-white transition-all shadow-lg">
          Criar Novo Tópico
        </button>
      </footer>

    </section>
  );
}