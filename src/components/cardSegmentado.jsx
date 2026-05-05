import React, { useMemo } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
// Importando o módulo CSS seguindo a sua estrutura de pastas
import styles from "../styles/modules/cardsegmentado.module.css";

function CardSegmentado({ valor, percentual, titulo, subtitulo, corDestaque }) {
  
  const obterCorPorContexto = () => {
    if (corDestaque) return corDestaque;
    const t = titulo?.toLowerCase() || "";
    if (t.includes("receita")) return "#00F2FF";
    if (t.includes("despesa")) return "#FF00E5";
    if (t.includes("lucro") || t.includes("líquido")) return "#00FF41";
    return "#7000FF";
  };

  const corFinal = obterCorPorContexto();
  const segmentos = 35;
  const ativos = Math.round((Number(percentual) / 100) * segmentos);

  const dados = useMemo(() => {
    return Array.from({ length: segmentos }, (_, i) => {
      const ativo = i < ativos;
      let cor = "#1E0B36";
      if (ativo) cor = corFinal;
      return { valor: 1, cor, ativo };
    });
  }, [ativos, corFinal]);

  // Lógica de tamanho de fonte mantida
  const obterClasseTamanho = (texto) => {
    const s = texto?.toString() || "";
    if (s.length > 12) return styles.textLg;
    if (s.length > 9) return styles.textXl;
    if (s.length > 6) return styles.text2xl;
    return styles.text4xl;
  };

  return (
    <div className={styles.cardContainer}>
      {/* INDICADOR LIVE */}
      <div className={styles.liveIndicator}>
        <span className={styles.pingContainer}>
          <span className={styles.pingAnim}></span>
          <span className={styles.pingStatic}></span>
        </span>
        <span className={styles.liveText}>Live</span>
      </div>

      <div className={styles.contentWrapper}>
        {/* GRÁFICO CIRCULAR */}
        <div className={styles.chartContainer}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dados}
                dataKey="valor"
                cx="50%"
                cy="50%"
                innerRadius={75}
                outerRadius={90}
                paddingAngle={3}
                startAngle={225}
                endAngle={-45}
                stroke="none"
              >
                {dados.map((item, i) => (
                  <Cell
                    key={i}
                    fill={item.cor}
                    style={{
                      filter: item.ativo ? `drop-shadow(0 0 12px ${item.cor}88)` : "none",
                      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* VALOR CENTRALIZADO */}
          <div className={styles.centerValueWrapper}>
            <span className={`${styles.mainValue} ${obterClasseTamanho(valor)}`}>
              {valor}
            </span>
            <span className={styles.subLabel}>Finance Check</span>
          </div>
        </div>

        {/* TEXTOS DOS CARDS */}
        <div className={styles.textContainer}>
          <h3 className={styles.title} style={{ color: corFinal }}>
            {titulo}
          </h3>
          <p className={styles.subtitle}>{subtitulo}</p>
        </div>
      </div>
    </div>
  );
}

export default CardSegmentado;