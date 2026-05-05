import React from 'react';
import styles from "../styles/modules/performancebars.module.css"; // Caminho todo em minúsculo

const PerformanceBars = ({ barras, dataBarras }) => {
  const categoriasDespesas = [
    { label: "Aluguel", valor: "100%", cor: "#FF00E5" },
    { label: "Fornecedores", valor: "85%", cor: "#00F2FF" },
    { label: "Marketing", valor: "45%", cor: "#7000FF" },
    { label: "Funcionários", valor: "95%", cor: "#00FF41" }
  ];

  // Mantendo sua lógica de prioridade de dados
  const dadosExibicao = (barras && barras.length ? barras : (dataBarras || categoriasDespesas));

  return (
    <div className={styles.mainContainer}>

      <div className={styles.headerWrapper}>
        <h4 className={styles.title}>
          Despesas por <span className={styles.highlight}>Categoria</span>
        </h4>
        <p className={styles.subtitle}>
          Fluxo de Saída Mensal
        </p>
      </div>

      <div className={styles.displayArea}>
        {dadosExibicao.map((item, index) => {
          const valorLimpo = Number(String(item.valor).replace("%", "")) || 0;
          const limiteAtivo = Math.round((valorLimpo / 100) * 15);
          
          return (
            <div key={index} className={styles.columnUnit}>
              
              <span className={styles.percentageText}>
                {valorLimpo}%
              </span>

              <div className={styles.stackSegments}>
                {Array.from({ length: 15 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={styles.segmentBlock}
                    style={{
                      backgroundColor: i < limiteAtivo ? item.cor : "#140624",
                      opacity: i < limiteAtivo ? 1 : 0.1,
                      boxShadow: i < limiteAtivo ? `0 0 10px ${item.cor}44` : "none"
                    }} 
                  />
                ))}
              </div>

              <span className={styles.labelText}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PerformanceBars;