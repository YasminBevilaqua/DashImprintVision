import { Eye, CheckCircle2, XCircle } from "lucide-react";

interface InspectionItem {
  name: string;
  status: "OK" | "ERRO";
  confidence: number;
}

const items: InspectionItem[] = [
  { name: "Logo Frontal Elgin", status: "OK", confidence: 98 },
  { name: "Selo Fluido R32", status: "OK", confidence: 99 },
  { name: "Identificador Inverter", status: "ERRO", confidence: 83 },
];

const AIVerification = () => (
  <div className="glass-card p-5 h-full">
    <div className="flex items-center gap-2 mb-5">
      <Eye className="h-4 w-4 text-info" />
      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
        Verificação Visual IA
      </h3>
    </div>
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.name}
          className="flex items-center justify-between p-3.5 rounded-lg bg-secondary hover:bg-card-elevated transition-colors"
        >
          <div className="flex items-center gap-3 min-w-0">
            {item.status === "OK" ? (
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
            ) : (
              <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />
            )}
            <span className="text-sm font-medium text-foreground truncate">{item.name}</span>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
              item.status === "OK" ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive"
            }`}>
              {item.status}
            </span>
            <div className="w-20">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-muted-foreground">IA</span>
                <span className="text-xs font-mono font-semibold text-foreground">{item.confidence}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    item.confidence >= 95 ? "bg-success" : item.confidence >= 90 ? "bg-warning" : "bg-destructive"
                  }`}
                  style={{ width: `${item.confidence}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AIVerification;
