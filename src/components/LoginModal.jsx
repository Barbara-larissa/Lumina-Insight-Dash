import React, { useState } from "react";
import { X } from "lucide-react";

export default function LoginModal({ 
  isLogin, 
  setIsLogin, 
  emailLog, 
  setEmailLog, 
  senhaLog, 
  setSenhaLog, 
  logar,
  nome, 
  setNome, 
  emailCad, 
  setEmailCad, 
  senhaCad, 
  setSenhaCad, 
  cadastrar,
  loading, 
  msg,
  setLoginOpen 
}) {
  
  // Estado para a prévia da foto no cadastro
  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
      // Caso precise enviar o arquivo para o PHP, você pode adicionar a lógica aqui
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      
      {/* CARD PRINCIPAL */}
      <article className="bg-[#0B0118] border border-white/10 rounded-[2.5rem] w-full max-w-md overflow-hidden shadow-2xl relative">
        
        {/* BOTÃO FECHAR (X) */}
        <button 
          onClick={() => setLoginOpen(false)} 
          className="absolute top-6 right-6 z-10 text-slate-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
        >
          <X size={20} />
        </button>
        
        <header className="p-8 pb-4 text-center">
          <h2 className="text-2xl font-black text-white uppercase tracking-[0.2em]">
            {isLogin ? "Login" : "Cadastro"}
          </h2>
        </header>

        {/* CONTAINER COM SLIDE (Lógica de transição preservada) */}
        <main className={`flex w-[200%] transition-all duration-500 ${isLogin ? "translate-x-0" : "-translate-x-1/2"}`}>
          
          {/* --- FORMULÁRIO DE LOGIN --- */}
          <section className="w-full p-8 space-y-4">
            <fieldset className="space-y-4 border-none p-0 m-0">
              <input
                type="email"
                placeholder="E-mail"
                value={emailLog}
                onChange={(e) => setEmailLog(e.target.value)}
                className="w-full bg-[#130721] border border-white/5 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#00F2FF] transition-all"
              />
              <input
                type="password"
                placeholder="Senha"
                value={senhaLog}
                onChange={(e) => setSenhaLog(e.target.value)}
                className="w-full bg-[#130721] border border-white/5 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#9D00FF] transition-all"
              />
            </fieldset>

            <button 
              onClick={logar} 
              disabled={loading} 
              className="w-full py-3 rounded-xl font-bold bg-gradient-to-r from-[#00F2FF] to-[#9D00FF] text-black hover:scale-[1.02] active:scale-95 transition disabled:opacity-50"
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>

            <footer className="text-center text-sm text-slate-500">
              Não tem conta? <span onClick={() => setIsLogin(false)} className="text-[#00F2FF] cursor-pointer hover:underline">Cadastre-se</span>
            </footer>
          </section>

          {/* --- FORMULÁRIO DE CADASTRO --- */}
          <section className="w-full p-8 space-y-4">
            
            {/* NOVO: ÁREA DE UPLOAD DO AVATAR COM SINAL DE + */}
            <div className="flex flex-col items-center justify-center mb-4">
              <label className="relative group cursor-pointer">
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleAvatarChange}
                />
                
                {/* Círculo do Avatar */}
                <div className="w-20 h-20 rounded-full border-2 border-dashed border-white/20 group-hover:border-[#00F2FF] flex items-center justify-center overflow-hidden transition-all bg-[#130721] shadow-[0_0_15px_rgba(0,242,255,0)] group-hover:shadow-[0_0_15px_rgba(0,242,255,0.3)]">
                  {avatarPreview ? (
                    <img src={avatarPreview} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    /* SINAL DE + (SVG nativo para garantir que apareça) */
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/20 group-hover:text-[#00F2FF] transition-colors">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  )}
                </div>

                {/* Pequeno badge flutuante */}
                <div className="absolute -bottom-1 -right-1 bg-[#00F2FF] w-6 h-6 rounded-full flex items-center justify-center text-black shadow-lg scale-0 group-hover:scale-100 transition-transform">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                  </svg>
                </div>
              </label>
              <span className="text-[10px] text-white/30 uppercase mt-2 tracking-widest font-black">Sua Foto</span>
            </div>

            <fieldset className="space-y-4 border-none p-0 m-0">
              <input
                type="text"
                placeholder="Seu Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full bg-[#130721] border border-white/5 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#00F2FF] transition-all"
              />
              <input
                type="email"
                placeholder="E-mail para cadastro"
                value={emailCad}
                onChange={(e) => setEmailCad(e.target.value)}
                className="w-full bg-[#130721] border border-white/5 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#9D00FF] transition-all"
              />
              <input
                type="password"
                placeholder="Crie uma Senha"
                value={senhaCad}
                onChange={(e) => setSenhaCad(e.target.value)}
                className="w-full bg-[#130721] border border-white/5 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#FF00E5] transition-all"
              />
            </fieldset>

            <button 
              onClick={cadastrar} 
              disabled={loading} 
              className="w-full py-3 rounded-xl font-bold bg-gradient-to-r from-[#9D00FF] to-[#FF00E5] text-white hover:scale-[1.02] active:scale-95 transition disabled:opacity-50 shadow-lg shadow-purple-500/20"
            >
              {loading ? "Criando..." : "Criar Conta"}
            </button>

            <footer className="text-center text-sm text-slate-500">
              Já tem conta? <span onClick={() => setIsLogin(true)} className="text-[#00F2FF] cursor-pointer hover:underline">Fazer login</span>
            </footer>
          </section>
        </main>

        {/* MENSAGENS DE FEEDBACK (Logar/Cadastrar) */}
        {msg && (
          <aside className="pb-6 px-8 text-center text-sm text-[#00F2FF] font-medium animate-pulse">
            {msg}
          </aside>
        )}
      </article>
    </div>
  );
}