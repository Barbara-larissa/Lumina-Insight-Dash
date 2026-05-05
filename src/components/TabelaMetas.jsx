import React from 'react';
import styles from '../styles/modules/tabelametas.module.css';

const TabelaMetas = ({ status = [] }) => {
  // Dados de fallback para consistência da UI
  const dados = (status && status.length > 0) ? status : [
    { label: "Meta de Faturamento", percentual: "0%", cor_referencia: "#FF00E5" },
    { label: "Meta de Lucro", percentual: "0%", cor_referencia: "#00F2FF" },
    { label: "Redução de Despesas", percentual: "0%", cor_referencia: "#00FF88" }
  ];

  const isOnline = status.length > 0;

  return (
    <article className={styles.card}>
      
      <header className={styles.header}>
        <div>
          <h3 className={styles.title}>
            <span className={styles.titleAccent}>METAS</span> 
            <span className={styles.titleMain}>FINANCEIRAS</span>
          </h3>
          <p className={styles.syncLabel}>Sincronizado via PHP</p>
        </div>
        
        <div className={styles.statusBadge}>
          <div className={`${styles.dot} ${isOnline ? styles.dotOnline : styles.dotOffline}`} />
          <span className={styles.statusText}>
            {isOnline ? 'ONLINE' : 'OFFLINE'}
          </span>
        </div>
      </header>

      <section className={styles.list}>
        {dados.slice(0, 3).map((meta, index) => {
          const valorNumerico = parseInt(meta.percentual) || 0;
          const corNeon = meta.cor_referencia || '#FF00E5';

          return (
            <div key={meta.id || index}>
              <div className={styles.metaHeader}>
                <span className={styles.metaLabel}>{meta.label}</span>
                <span className={styles.metaPercent} style={{ color: corNeon }}>
                  {valorNumerico}%
                </span>
              </div>
              
              <div className={styles.progressContainer}>
                <div 
                  className={styles.progressBar}
                  style={{ 
                    width: `${valorNumerico}%`,
                    backgroundColor: corNeon,
                    boxShadow: `0 0 12px ${corNeon}88` 
                  }}
                />
              </div>
            </div>
          );
        })}
      </section>
    </article>
  );
};

export default TabelaMetas;