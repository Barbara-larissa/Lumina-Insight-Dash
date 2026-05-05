import React, { useState, useEffect } from "react";

// --- COMPONENTES DE INTERFACE ---
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import LoginModal from "./components/LoginModal";

// --- COMPONENTES DE PÁGINAS ---
import Forum from "./components/Forum";
import ChartPage from "./components/ChartPage";
import AppsPage from "./components/AppsPage";

// --- COMPONENTES DO DASHBOARD (NOMES EXATOS DA SUA PASTA) ---
import Calendario from "./components/calendario";      // 'c' minúsculo conforme seu arquivo
import Activities from "./components/Activities";
import CheckupNegocio from "./components/CheckupNegocio";
import CardSegmentado from "./components/cardSegmentado"; // com 'a' conforme seu arquivo
import TabelaMetas from "./components/TabelaMetas";
import FaturamentoChart from "./components/FaturamentoChart";
import PerformanceBars from "./components/BarraProgresso";

// --- ESTILOS (CSS MODULES) ---
import styles from "./styles/modules/app.module.css";

/* ============================================================
    COMPONENTES DE APOIO (DASHBOARD HOME)
============================================================ */
function DashboardHome({ cards, grafico, barras, status, logs, checkup }) {

  const dataLinhaDefault = [
    { label: "Jan", valor: 20 }, { label: "Fev", valor: 35 },
    { label: "Mar", valor: 15 }, { label: "Abr", valor: 45 },
    { label: "Mai", valor: 30 }, { label: "Jun", valor: 55 }
  ];

  const dataBarrasDefault = [
    { valor: 100, cor: "#FF00E5", label: "ALUGUEL" },
    { valor: 80, cor: "#00F2FF", label: "FORNEC." },
    { valor: 50, cor: "#9D00FF", label: "MARKET." }
  ];

  return (
    /* Aplicando a classe via CSS Modules conforme sua estrutura */
    <div className={`${styles['dashboard-content-wrapper']} space-y-8 pb-10`}>

      {/* BLOCO SUPERIOR INTEGRADO: CARDS E METAS */}
      {/* BLOCO SUPERIOR: Removi flex-nowrap para evitar que os cards sumam se a tela for pequena */}
      <section className="section-top-metrics flex flex-wrap lg:flex-row gap-6 items-stretch w-full">
        {(cards && cards.length ? cards : [
          { valor: "1.544", percentual: 75, label_principal: "Vendas" },
          { valor: "R$ 4.870", percentual: 60, label_principal: "Receita" },
          { valor: "84%", percentual: 84, label_principal: "Conversão" }
        ]).map((item, i) => (
          /* Mudança: usei flex-1 e w-full no mobile para garantir visibilidade */
          <div key={i} className="card-wrapper flex-1 min-w-[100%] sm:min-w-[250px] md:min-w-[300px]">
            <CardSegmentado
              valor={item.valor}
              percentual={item.percentual}
              titulo={item.label_principal}
              subtitulo={item.label_secundario || "Real-Time"}
            />
          </div>
        ))}

        <div className="metas-wrapper flex-1 min-w-[100%] lg:min-w-[350px]">
          <TabelaMetas status={status} />
        </div>
      </section>

      {/* BLOCO 03: GRÁFICOS E WIDGETS */}
      <section className="main-charts-grid grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">

        <div className="chart-faturamento-container">
          <FaturamentoChart
            grafico={grafico && grafico.length > 0 ? grafico : dataLinhaDefault}
          />
        </div>

        <div className="performance-bars-container">
          <PerformanceBars
            barras={barras}
            dataBarras={dataBarrasDefault}
          />
        </div>

        <div className="calendar-widget-container">
          <Calendario />
        </div>

        <div className="activities-widget-container">
          {/* Dentro de DashboardHome, a variável correta é 'logs' */}
          <Activities logs={logs} />
        </div>

        <div className="analysis-overview-container lg:col-span-2">
          <CheckupNegocio status={checkup} />
        </div>

      </section>
    </div>
  );
}

/* ============================================================
    APLICAÇÃO PRINCIPAL
============================================================ */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [abaAtiva, setAbaAtiva] = useState("DASHBOARD");

  const [dadosCards, setDadosCards] = useState([]);
  const [dadosGrafico, setDadosGrafico] = useState([]);
  const [dadosBarras, setDadosBarras] = useState([]);
  const [dadosStatus, setDadosStatus] = useState([]);
  const [dadosLogs, setDadosLogs] = useState([]);
  const [dadosCheckup, setDadosCheckup] = useState([]);

  const [isLogin, setIsLogin] = useState(true);
  const [emailLog, setEmailLog] = useState("");
  const [senhaLog, setSenhaLog] = useState("");
  const [nome, setNome] = useState("");
  const [emailCad, setEmailCad] = useState("");
  const [senhaCad, setSenhaCad] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const logar = () => { console.log("Login..."); };
  const cadastrar = () => { console.log("Cadastro..."); };

  useEffect(() => {
    const carregarDados = () => {
      const endpoints = [
        { url: "get_cards.php", setter: setDadosCards },
        { url: "get_line_chart.php", setter: (data) => setDadosGrafico(Array.isArray(data) ? data : (data.dados || [])) },
        { url: "grafico-barras.php", setter: setDadosBarras },
        { url: "metas-financeiras.php", setter: (data) => setDadosStatus(Array.isArray(data) ? data : []) },
        { url: "get_logs.php", setter: setDadosLogs },
        { url: "checkup-negocio.php", setter: (data) => setDadosCheckup(Array.isArray(data) ? data : []) }
      ];

      endpoints.forEach(api => {
        fetch(`http://127.0.0.1/api-dashboard/${api.url}`)
          .then(r => r.json())
          .then(api.setter)
          .catch(err => console.error(`Erro na API: ${api.url}`, err));
      });
    };

    carregarDados();
    const interval = setInterval(carregarDados, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-root-container flex min-h-screen bg-[#130721] text-white overflow-x-hidden">
      <Sidebar
        abaAtiva={abaAtiva}
        setAbaAtiva={setAbaAtiva}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main className="main-layout flex-1 bg-[#05010D] min-h-screen overflow-y-auto">
        <Header setMenuOpen={setMenuOpen} setLoginOpen={setLoginOpen} />

        <div className="page-container p-6 md:p-10 mx-auto">
          {abaAtiva === "DASHBOARD" && (
            <DashboardHome
              cards={dadosCards}
              grafico={dadosGrafico}
              barras={dadosBarras}
              status={dadosStatus}
              logs={dadosLogs}
              checkup={dadosCheckup}
            />
          )}
          {abaAtiva === "CHART" && <ChartPage />}
          {abaAtiva === "APPS" && <AppsPage />}
          {abaAtiva === "FORUM" && <Forum />}
        </div>
      </main>

      {loginOpen && (
        <LoginModal
          setLoginOpen={setLoginOpen}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          emailLog={emailLog}
          setEmailLog={setEmailLog}
          senhaLog={senhaLog}
          setSenhaLog={setSenhaLog}
          logar={logar}
          nome={nome}
          setNome={setNome}
          emailCad={emailCad}
          setEmailCad={setEmailCad}
          senhaCad={senhaCad}
          setSenhaCad={setSenhaCad}
          cadastrar={cadastrar}
          loading={loading}
          msg={msg}
        />
      )}
    </div>
  );
}