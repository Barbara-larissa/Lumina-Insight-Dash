import React from "react";
import { LayoutGrid, Cpu, Globe } from "lucide-react";

// O CAMINHO CORRETO: 
// No seu VS Code, o arquivo está em styles > modules
import styles from "../styles/modules/AppsPage.module.css";

export default function AppsPage() {
  const apps = [
    { name: "System Core", status: "Active", icon: Cpu, color: "#00F2FF" },
    { name: "Global Network", status: "Online", icon: Globe, color: "#FF00E5" },
    { name: "Interface Manager", status: "Standby", icon: LayoutGrid, color: "#9D00FF" },
  ];

  return (
    <section className={styles.container}>
      
      <header>
        <h2 className={styles.headerTitle}>
          System / <span className={styles.titleWhite}>Apps</span>
        </h2>
      </header>

      <main className={styles.grid}>
        {apps.map((app) => (
          <article key={app.name} className={styles.card}>
            
            <div className={styles.iconWrapper}>
              <app.icon size={24} color={app.color} />
            </div>

            <div className="flex flex-col">
              <h3 className={styles.appName}>
                {app.name}
              </h3>
              <p className={styles.appStatus}>
                {app.status}
              </p>
            </div>

          </article>
        ))}
      </main>

    </section>
  );
}