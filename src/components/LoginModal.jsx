import React, { useState } from "react";
import { X } from "lucide-react";
import styles from "../styles/modules/loginmodal.module.css";

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
  
  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className={styles.overlay}>
      
      <article className={styles.modalCard}>
        
        <button 
          onClick={() => setLoginOpen(false)} 
          className={styles.closeButton}
        >
          <X size={20} />
        </button>
        
        <header className={styles.header}>
          <h2 className={styles.title}>
            {isLogin ? "Login" : "Cadastro"}
          </h2>
        </header>

        <main className={`${styles.formContainer} ${isLogin ? styles.slideLogin : styles.slideRegister}`}>
          
          {/* LOGIN */}
          <section className={styles.formSection}>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="E-mail"
                value={emailLog}
                onChange={(e) => setEmailLog(e.target.value)}
                className={styles.inputField}
                style={{ borderColor: 'rgba(0, 242, 255, 0.1)' }}
              />
              <input
                type="password"
                placeholder="Senha"
                value={senhaLog}
                onChange={(e) => setSenhaLog(e.target.value)}
                className={styles.inputField}
                style={{ borderColor: 'rgba(157, 0, 255, 0.1)' }}
              />
            </div>

            <button 
              onClick={logar} 
              disabled={loading} 
              className={`${styles.btnPrimary} styles.loginGradient`}
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>

            <footer className={styles.footerText}>
              Não tem conta? <span onClick={() => setIsLogin(false)} className={styles.link}>Cadastre-se</span>
            </footer>
          </section>

          {/* CADASTRO */}
          <section className={styles.formSection}>
            
            <div className={styles.avatarContainer}>
              <label className={styles.avatarLabel}>
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleAvatarChange}
                />
                
                <div className={styles.avatarCircle}>
                  {avatarPreview ? (
                    <img src={avatarPreview} alt="Preview" className={styles.avatarImage} />
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'rgba(255,255,255,0.2)' }}>
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  )}
                </div>

                <div className={styles.cameraBadge}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                  </svg>
                </div>
              </label>
              <span className={styles.avatarText}>Sua Foto</span>
            </div>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Seu Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className={styles.inputField}
              />
              <input
                type="email"
                placeholder="E-mail para cadastro"
                value={emailCad}
                onChange={(e) => setEmailCad(e.target.value)}
                className={styles.inputField}
              />
              <input
                type="password"
                placeholder="Crie uma Senha"
                value={senhaCad}
                onChange={(e) => setSenhaCad(e.target.value)}
                className={styles.inputField}
              />
            </div>

            <button 
              onClick={cadastrar} 
              disabled={loading} 
              className={`${styles.btnPrimary} styles.registerGradient`}
            >
              {loading ? "Criando..." : "Criar Conta"}
            </button>

            <footer className={styles.footerText}>
              Já tem conta? <span onClick={() => setIsLogin(true)} className={styles.link}>Fazer login</span>
            </footer>
          </section>
        </main>

        {msg && (
          <aside className={styles.feedbackMsg}>
            {msg}
          </aside>
        )}
      </article>
    </div>
  );
}