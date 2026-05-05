import React from "react";
import {
  LayoutDashboard,
  BarChart3,
  AppWindow,
  MessageSquare,
  MailWarning,
  Settings,
  X
} from "lucide-react";
import styles from "../styles/modules/sidebar.module.css";

export default function Sidebar({
  abaAtiva,
  setAbaAtiva,
  menuOpen,
  setMenuOpen
}) {
  const menus = [
    { icon: LayoutDashboard, label: "DASHBOARD" },
    { icon: BarChart3, label: "CHART" },
    { icon: AppWindow, label: "APPS" },
    { icon: MessageSquare, label: "FORUM" },
    { icon: MailWarning, label: "EMAIL" },
    { icon: Settings, label: "SETTING" }
  ];

  return (
    <>
      {/* fundo escuro mobile */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className={styles.overlay}
        />
      )}

      <aside
        className={`${styles.sidebar} ${
          menuOpen ? styles.open : styles.closed
        }`}
      >
        {/* topo mobile */}
        <div className={styles.headerMobile}>
          <h1 className={styles.brandTitle}>Dashboard</h1>
          <button 
            onClick={() => setMenuOpen(false)}
            className={styles.closeButton}
          >
            <X size={24} />
          </button>
        </div>

        {/* topo desktop */}
        <div className={styles.headerDesktop}>
          <div className={styles.brandIndicator} />
          <h1 className={styles.brandTitle}>Dashboard</h1>
        </div>

        {/* menu */}
        <nav className={styles.nav}>
          {menus.map((item) => (
            <div
              key={item.label}
              onClick={() => {
                setAbaAtiva(item.label);
                setMenuOpen(false);
              }}
              className={`${styles.navItem} ${
                abaAtiva === item.label
                  ? styles.itemActive
                  : styles.itemInactive
              }`}
            >
              <item.icon size={18} />
              <span className={styles.linkLabel}>
                {item.label}
              </span>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}