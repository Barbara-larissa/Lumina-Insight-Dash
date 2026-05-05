import React from 'react';
import styles from "../styles/modules/customtooltip.module.css";

const CustomTooltip = ({ active, payload, label }) => {
  // 1. Verificamos se a tooltip está ativa e se há dados no payload
  if (active && payload && payload.length) {
    
    // 2. O 'payload[0].payload' contém o objeto original da sua array 'data'
    // Se o seu objeto for { name: "Seg", total: 400 }, o 'name' estará aqui.
    const dadosBrutos = payload[0].payload;
    const valorAtual = payload[0].value;

    // 3. Prioridade de exibição: 
    // Primeiro tentamos o 'label' do Recharts, 
    // se falhar, tentamos o 'name' direto do seu objeto,
    // se falhar, usamos um fallback.
    const dataExibicao = label || dadosBrutos.name || "Data Indefinida";

    // Lógica de queda (exemplo usando o valor atual)
    const isQueda = valorAtual < 50;
    const corStatus = isQueda ? "#FF0000" : "#00F2FF";

    return (
      <div className={styles.tooltipContainer}>
        <div
          className={styles.statusBar}
          style={{
            backgroundColor: corStatus,
            boxShadow: `0 0 15px ${corStatus}`
          }}
        />

        {/* Aqui é onde a data deve aparecer corrigida */}
        <p className={styles.label}>
          {dataExibicao}
        </p>

        <div className={styles.contentWrapper}>
          <div className={styles.valueRow}>
            <span className={styles.mainValue}>
              {valorAtual}
            </span>
            <span 
              className={styles.trendBadge}
              style={{ color: corStatus }}
            >
              {isQueda ? "▼ DOWN" : "▲ UP"}
            </span>
          </div>

          <span 
            className={styles.statusText}
            style={{ color: isQueda ? "#FF0000" : "rgba(255,255,255,0.6)" }}
          >
            {isQueda ? "Atenção: Queda detectada" : "Desempenho Estável"}
          </span>
        </div>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;