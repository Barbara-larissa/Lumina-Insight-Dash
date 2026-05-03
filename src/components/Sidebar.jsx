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
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-72
          bg-[#130721] p-8 border-r border-white/5
          transform transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:flex lg:flex-col
        `}
      >
        {/* topo mobile */}
        <div className="flex justify-between items-center mb-10 lg:hidden">
          <h1 className="text-[14px] font-black tracking-[0.2em] uppercase">
            Dashboard
          </h1>

          <button onClick={() => setMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* topo desktop */}
        <div className="hidden lg:flex items-center gap-3 mb-12">
          <div className="w-2.5 h-7 bg-[#00F2FF] rounded-full shadow-[0_0_15px_#00F2FF]" />

          <h1 className="text-[14px] font-black tracking-[0.2em] uppercase">
            Dashboard
          </h1>
        </div>

        {/* menu */}
        <nav className="space-y-1 flex-1">
          {menus.map((item) => (
            <div
              key={item.label}
              onClick={() => {
                setAbaAtiva(item.label);
                setMenuOpen(false);
              }}
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl cursor-pointer transition-all ${
                abaAtiva === item.label
                  ? "bg-[#00F2FF]/10 text-[#00F2FF]"
                  : "text-slate-500 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon size={18} />

              <span className="text-[10px] font-black tracking-[0.2em]">
                {item.label}
              </span>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}