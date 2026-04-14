import { AlertTriangle, XOctagon, Wrench } from "lucide-react";

interface AlertItem {
  type: "error" | "warning";
  title: string;
  description: string;
  time: string;
}

const alerts: AlertItem[] = [
  {
    type: "error",
    title: "Falhas Recentes",
    description: "Recorrente inverter sticker inconsistência detectada na estação 3.",
    time: "Há 2 min",
  },
  {
    type: "warning",
    title: "Manutenção de Câmera",
    description: "Lens cleaning recomendado — câmera CAM-04 com perda de nitidez.",
    time: "Há 15 min",
  },
  {
    type: "warning",
    title: "Temperatura Elevada",
    description: "Sensor térmico T-07 reportando 42°C acima do baseline.",
    time: "Há 28 min",
  },
];

const SystemAlerts = () => (
  <div className="glass-card p-5 h-full flex flex-col">
    <div className="flex items-center gap-2 mb-4">
      <AlertTriangle className="h-4 w-4 text-warning" />
      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
        Alertas do Sistema
      </h3>
    </div>
    <div className="space-y-3 flex-1 overflow-auto scrollbar-thin max-h-[220px]">
      {alerts.map((alert, i) => (
        <div
          key={i}
          className={`p-3.5 rounded-lg border-l-4 transition-colors ${
            alert.type === "error"
              ? "bg-destructive/10 border-destructive"
              : "bg-warning/10 border-warning"
          }`}
        >
          <div className="flex items-start gap-3">
            {alert.type === "error" ? (
              <XOctagon className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
            ) : (
              <Wrench className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs font-bold uppercase ${
                  alert.type === "error" ? "text-destructive" : "text-warning"
                }`}>
                  {alert.title}
                </span>
                <span className="text-[10px] text-muted-foreground">{alert.time}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{alert.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SystemAlerts;
