import TradingViewChart from "@/components/dashboard/TradingViewChart";
import SignalMonitor from "@/components/dashboard/SignalMonitor";

export default function DashboardPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-black mb-10">
        Live Dashboard
      </h1>

      <div className="grid lg:grid-cols-2 gap-8">
        <TradingViewChart />
        <SignalMonitor />
      </div>
    </main>
  );
}
