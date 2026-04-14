import DashboardHeader from "@/components/dashboard/DashboardHeader";
import KPICards from "@/components/dashboard/KPICards";
import ProductionChart from "@/components/dashboard/ProductionChart";
import AIVerification from "@/components/dashboard/AIVerification";
import InspectionLog from "@/components/dashboard/InspectionLog";
import SystemAlerts from "@/components/dashboard/SystemAlerts";
import DashboardFooter from "@/components/dashboard/DashboardFooter";

const Index = () => (
  <div className="min-h-screen bg-background p-4 flex flex-col gap-4">
    <DashboardHeader />
    <KPICards />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1">
      <div className="lg:col-span-2">
        <ProductionChart />
      </div>
      <div>
        <AIVerification />
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2">
        <InspectionLog />
      </div>
      <div>
        <SystemAlerts />
      </div>
    </div>
    <DashboardFooter />
  </div>
);

export default Index;
