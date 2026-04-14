import { useState, useEffect } from "react";
import { Radio } from "lucide-react";

interface LogEntry {
  id: number;
  timestamp: string;
  item: string;
  result: "OK" | "ERRO";
  confidence: number;
}

const itemNames = [
  "Logo Frontal Elgin",
  "Selo Fluido R32",
  "Identificador Inverter",
  "QR Code Lateral",
  "Etiqueta Voltagem",
];

const generateEntry = (id: number): LogEntry => {
  const now = new Date();
  now.setSeconds(now.getSeconds() - id * 3);
  const isError = Math.random() < 0.15;
  return {
    id,
    timestamp: now.toLocaleTimeString("pt-BR"),
    item: itemNames[Math.floor(Math.random() * itemNames.length)],
    result: isError ? "ERRO" : "OK",
    confidence: isError ? 75 + Math.floor(Math.random() * 15) : 94 + Math.floor(Math.random() * 6),
  };
};

const InspectionLog = () => {
  const [logs, setLogs] = useState<LogEntry[]>(() =>
    Array.from({ length: 15 }, (_, i) => generateEntry(i))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prev) => [generateEntry(Date.now()), ...prev.slice(0, 29)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
          Log de Inspeções em Tempo Real
        </h3>
        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success/10 text-success text-[10px] font-bold uppercase tracking-wider">
          <Radio className="h-3 w-3 status-pulse" />
          Auto-Update Ativo
        </span>
      </div>
      <div className="flex-1 overflow-auto scrollbar-thin max-h-[220px]">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-card">
            <tr className="text-left text-[10px] text-muted-foreground uppercase tracking-wider">
              <th className="pb-2 pr-3">Timestamp</th>
              <th className="pb-2 pr-3">Item</th>
              <th className="pb-2 pr-3">Resultado</th>
              <th className="pb-2">IA Confiança</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id} className="border-t border-border/50 hover:bg-secondary/50 transition-colors">
                <td className="py-2 pr-3 font-mono text-xs text-muted-foreground">{log.timestamp}</td>
                <td className="py-2 pr-3 text-xs text-foreground">{log.item}</td>
                <td className="py-2 pr-3">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    log.result === "OK" ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive"
                  }`}>
                    {log.result}
                  </span>
                </td>
                <td className="py-2 font-mono text-xs text-foreground">{log.confidence}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InspectionLog;
