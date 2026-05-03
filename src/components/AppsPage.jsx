import React from "react";
import { LayoutGrid, Cpu, Globe } from "lucide-react";

export default function AppsPage() {
  const apps = [
    { name: "Sytem Core", status: "Active", icon: Cpu, color: "#00F2FF" },
    { name: "Global Network", status: "Online", icon: Globe, color: "#FF00E5" },
    { name: "Interface Manager", status: "Standby", icon: LayoutGrid, color: "#9D00FF" },
  ];

  return (
    /* CONTAINER PRINCIPAL DA PÁGINA */
    <section className="animate-in fade-in duration-500">
      
      {/* CABEÇALHO DA SEÇÃO */}
      <header>
        <h2 className="text-[#00F2FF] font-black tracking-[0.3em] uppercase text-sm mb-8">
          System / <span className="text-white">Apps</span>
        </h2>
      </header>

      {/* GRID DE APLICATIVOS */}
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {apps.map((app) => (
          
          /* CARD DE APP INDIVIDUAL */
          <article 
            key={app.name} 
            className="bg-[#0B0118] p-6 rounded-[2rem] border border-white/5 flex items-center gap-5 hover:border-[#00F2FF]/30 transition-all group"
          >
            {/* ÍCONE COM BACKGROUND */}
            <div className="p-4 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
              <app.icon size={24} color={app.color} />
            </div>

            {/* INFORMAÇÕES DO APP */}
            <div className="flex flex-col">
              <h3 className="text-white font-bold text-sm tracking-tight">
                {app.name}
              </h3>
              <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black mt-1">
                {app.status}
              </p>
            </div>

          </article>
        ))}
      </main>

    </section>
  );
}