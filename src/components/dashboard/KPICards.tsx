import { Factory, CheckCircle2, XCircle, AlertTriangle, TrendingUp, TrendingDown } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: React.ReactNode;
}

const KPICard = ({ title, value, change, positive, icon }: KPICardProps) => (
  <div className="glass-card p-5 flex items-center gap-4 hover:bg-card-elevated transition-all duration-300 group cursor-default">
    <div className={`p-3 rounded-xl ${positive ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'}`}>
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{title}</p>
      <p className="text-2xl font-bold text-foreground mt-0.5">{value}</p>
    </div>
    <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
      positive ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'
    }`}>
      {positive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
      {change}
    </div>
  </div>
);

const KPICards = () => {
  const kpis: KPICardProps[] = [
    { title: "Produção Total", value: "10,230", change: "+12%", positive: true, icon: <Factory className="h-6 w-6" /> },
    { title: "Aprovados", value: "9,981", change: "+8.3%", positive: true, icon: <CheckCircle2 className="h-6 w-6" /> },
    { title: "Reprovados", value: "249", change: "+3.1%", positive: false, icon: <XCircle className="h-6 w-6" /> },
    { title: "Taxa de Erro", value: "2.4%", change: "-0.5%", positive: false, icon: <AlertTriangle className="h-6 w-6" /> },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi) => (
        <KPICard key={kpi.title} {...kpi} />
      ))}
    </div>
  );
};

export default KPICards;
