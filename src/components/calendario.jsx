import React from 'react';
import styles from "../styles/modules/calendario.module.css";

const Calendario = () => {
  const dataAtual = new Date();
  const hoje = dataAtual.getDate();
  const mesAtual = dataAtual.toLocaleString('pt-BR', { month: 'long' });
  const anoAtual = dataAtual.getFullYear();

  // Lógica para descobrir quantos dias tem o mês e em qual dia da semana começa
  const primeiroDiaDoMes = new Date(anoAtual, dataAtual.getMonth(), 1).getDay();
  const ultimoDiaDoMes = new Date(anoAtual, dataAtual.getMonth() + 1, 0).getDate();

  const diasSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  
  // Criamos as células vazias para alinhar o primeiro dia do mês corretamente
  const emptyCells = Array.from({ length: primeiroDiaDoMes });
  const diasMes = Array.from({ length: ultimoDiaDoMes }, (_, i) => i + 1);

  return (
    <article className={styles.container}>
      
      <header className={styles.header}>
        <h4 className={styles.title}>
          {mesAtual} <span className={styles.yearHighlight}>{anoAtual}</span>
        </h4>

        <nav className={styles.nav}>
          <button className={styles.navButton}> &lt; </button>
          <button className={styles.navButton}> &gt; </button>
        </nav>
      </header>

      <section className={styles.weekGrid}>
        {diasSemana.map((dia, index) => (
          <span key={index} className={styles.weekDayLabel}>
            {dia}
          </span>
        ))}
      </section>

      <main className={styles.daysGrid}>
        {/* Espaços vazios do início do mês */}
        {emptyCells.map((_, i) => (
          <div key={`empty-${i}`} className={styles.emptyCell} />
        ))}

        {/* Dias reais */}
        {diasMes.map((dia) => {
          const isToday = dia === hoje;

          return (
            <div
              key={dia}
              className={`${styles.dayCell} ${isToday ? styles.today : ''}`}
            >
              {dia}
            </div>
          );
        })}
      </main>

    </article>
  );
};

export default Calendario;