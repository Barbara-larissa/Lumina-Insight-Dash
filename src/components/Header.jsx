import React, { useState, useEffect } from "react";
import { Search, Bell, Settings, Mail, Menu, LogOut, Plus } from "lucide-react";
import styles from "../styles/modules/header.module.css";

export default function Header({ setMenuOpen, setLoginOpen }) {
  const [usuario, setUsuario] = useState(null);

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
    <header className={styles.header}>
      
      {/* MENU MOBILE */}
      <nav className={styles.mobileNav}>
        <button
          onClick={() => setMenuOpen(true)}
          className={styles.menuButton}
        >
          <Menu size={26} />
        </button>
      </nav>

      {/* BARRA DE PESQUISA */}
      <section className={styles.searchSection}>
        <input
          type="text"
          placeholder="SEARCH"
          className={styles.searchInput}
        />
        <Search className={styles.searchIcon} size={14} />
      </section>

      {/* AÇÕES E PERFIL */}
      <aside className={styles.actionsArea}>
        
        {/* ÍCONES DE NOTIFICAÇÃO */}
        <div className={styles.iconGroup}>
          <Bell size={20} className={styles.navIcon} />
          <Settings size={20} className={styles.navIcon} />
          <Mail size={20} className={styles.navIcon} />
        </div>

        {/* STATUS DE AUTENTICAÇÃO */}
        <div className={styles.authStatus}>
          {usuario ? (
            <div className="flex items-center gap-3">
              <div className={styles.userText}>
                <p className={styles.welcomeLabel}>Bem-vinda</p>
                <p className={styles.userName}>{usuario.nome}</p>
              </div>
              <button 
                onClick={handleLogout}
                className={styles.logoutButton}
                title="Sair"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <button 
              onClick={() => setLoginOpen(true)}
              className={styles.loginLink}
            >
              LOGIN
            </button>
          )}

          {/* AVATAR COM SINAL DE + */}
          <label className={`${styles.avatarWrapper} ${
              usuario ? styles.avatarLogged : styles.avatarGuest
            }`}>
            
            <input type="file" className="hidden" accept="image/*" />
            
            <Plus 
              size={20} 
              className={`${styles.plusIcon} ${
                usuario ? 'text-[#9D00FF]' : 'text-[#00F2FF]'
              }`} 
            />
          </label>
        </div>

      </aside>

    </header>
  );
}