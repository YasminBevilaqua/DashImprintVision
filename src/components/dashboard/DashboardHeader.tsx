import { useState, useEffect } from "react";
import { Settings, Wifi } from "lucide-react";

const DashboardHeader = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatted = dateTime.toLocaleDateString("pt-BR", {
    day: "2-digit", month: "2-digit", year: "numeric",
  }) + " - " + dateTime.toLocaleTimeString("pt-BR");

  return (
    <header className="glass-card px-6 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold text-foreground tracking-tight">
          Dashboard de Produção - Inspeção por Visão
        </h1>
        <div className="flex items-center gap-2 mt-1">
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <span className="relative flex h-2.5 w-2.5">
              <span className="status-pulse absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
            </span>
            Sistema Online
          </span>
          <span className="text-muted-foreground">•</span>
          <span className="text-sm text-muted-foreground">Linha 04</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-mono text-foreground">{formatted}</p>
        </div>
        <button className="p-2 rounded-lg bg-secondary hover:bg-card-elevated transition-colors">
          <Settings className="h-5 w-5 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
