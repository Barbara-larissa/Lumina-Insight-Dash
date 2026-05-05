import React from "react";
import { ThumbsUp, MessageCircle } from "lucide-react";
import styles from "../styles/modules/forum.module.css";

export default function Forum() {
  const topicos = [
    { id: 1, autor: "Miguel", titulo: "Dúvida sobre integração PHP", respostas: 5, likes: 12 },
    { id: 2, autor: "Brian", titulo: "Melhores fontes para UI Neon", respostas: 8, likes: 20 },
    { id: 3, autor: "Admin", titulo: "Regras da Comunidade TechShop", respostas: 0, likes: 45 }
  ];

  return (
    <section className={styles.section}>
      
      <header>
        <h2 className={styles.title}>
          Fórum da <span className={styles.titleWhite}>Comunidade</span>
        </h2>
      </header>

      <main className={styles.mainList}>
        {topicos.map((topico) => (
          <article key={topico.id} className={styles.topicCard}>
            <div className={styles.topicHeader}>
              
              <div className="flex flex-col">
                <h4 className={styles.topicTitle}>
                  {topico.titulo}
                </h4>
                <p className={styles.authorLabel}>
                  Postado por: <span className={styles.authorName}>{topico.autor}</span>
                </p>
              </div>

              <aside className={styles.metrics}>
                <div className={styles.metricItem}>
                  <ThumbsUp size={14} />
                  <span className={styles.metricValue}>{topico.likes}</span>
                </div>
                <div className={styles.metricItem}>
                  <MessageCircle size={14} />
                  <span className={styles.metricValue}>{topico.respostas}</span>
                </div>
              </aside>

            </div>
          </article>
        ))}
      </main>
      
      <footer>
        <button className={styles.createButton}>
          Criar Novo Tópico
        </button>
      </footer>

    </section>
  );
}