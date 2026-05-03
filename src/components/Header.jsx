import React, { useState, useEffect } from "react";
import { Search, Bell, Settings, Mail, Menu, LogOut, Plus } from "lucide-react";

export default function Header({ setMenuOpen, setLoginOpen }) {
  const [usuario, setUsuario] = useState(null);

  // LÓGICA DE USUÁRIO (MANTIDA)
  useEffect(() => {
    const dadosSalvos = localStorage.getItem("user");
    if (dadosSalvos) {
      setUsuario(JSON.parse(dadosSalvos));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    /* CONTAINER PRINCIPAL DO HEADER */
    <header className="flex justify-between items-center px-6 md:px-12 py-6 bg-[#0B0118] border-b border-white/5">
      
      {/* ÁREA DA ESQUERDA: MENU MOBILE */}
      <nav className="md:hidden mr-4">
        <button
          onClick={() => setMenuOpen(true)}
          className="text-[#00F2FF] hover:scale-110 transition-transform"
        >
          <Menu size={26} />
        </button>
      </nav>

      {/* ÁREA CENTRAL: BARRA DE PESQUISA */}
      <section className="relative w-full max-w-[300px] md:max-w-[400px]">
        <input
          type="text"
          placeholder="SEARCH"
          className="w-full bg-[#130721] border border-white/5 rounded-xl py-3 px-5 text-[10px] text-slate-400 focus:outline-none focus:border-[#00F2FF] transition-all"
        />
        <Search className="absolute right-4 top-3.5 text-slate-600" size={14} />
      </section>

      {/* ÁREA DA DIREITA: AÇÕES E PERFIL */}
      <aside className="flex items-center gap-4 md:gap-6">
        
        {/* ÍCONES DE NOTIFICAÇÃO */}
        <div className="hidden sm:flex gap-6 text-slate-500">
          <Bell size={20} className="hover:text-white cursor-pointer transition-colors" />
          <Settings size={20} className="hover:text-white cursor-pointer transition-colors" />
          <Mail size={20} className="hover:text-white cursor-pointer transition-colors" />
        </div>

        {/* STATUS DE AUTENTICAÇÃO */}
        <div className="flex items-center gap-3 border-l border-white/5 pl-6">
          {usuario ? (
            /* USUÁRIO LOGADO */
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Bem-vinda</p>
                <p className="text-[12px] text-white font-black">{usuario.nome}</p>
              </div>
              <button 
                onClick={handleLogout}
                className="text-slate-500 hover:text-red-500 transition-colors"
                title="Sair"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            /* BOTÃO LOGIN */
            <button 
              onClick={() => setLoginOpen(true)}
              className="text-[11px] font-black tracking-[0.2em] text-[#00F2FF] hover:text-white transition-colors"
            >
              LOGIN
            </button>
          )}

          {/* AVATAR COM SINAL DE + (Substituindo a imagem fixa) */}
          <label className={`relative w-9 h-9 md:w-11 md:h-11 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-500 hover:bg-white/5 group ${
              usuario ? 'border-[#9D00FF] shadow-[0_0_10px_#9D00FF]' : 'border-[#00F2FF]'
            }`}>
            
            <input type="file" className="hidden" accept="image/*" />
            
            <Plus 
              size={20} 
              className={`transition-transform group-hover:scale-125 ${
                usuario ? 'text-[#9D00FF]' : 'text-[#00F2FF]'
              }`} 
            />
          </label>
        </div>

      </aside>

    </header>
  );
}