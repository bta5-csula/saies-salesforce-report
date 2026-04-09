import HeroSection from "@/components/report/HeroSection";
import NewsTicker from "@/components/report/NewsTicker";
import FinancialMetrics from "@/components/report/FinancialMetrics";
import AgentforceSection from "@/components/report/AgentforceSection";
import ZeroCopyDiagram from "@/components/report/ZeroCopyDiagram";
import CompetitorEdge from "@/components/report/CompetitorEdge";
import IndustryVerticals from "@/components/report/IndustryVerticals";
import TrustLayer from "@/components/report/TrustLayer";
import ROICalculator from "@/components/report/ROICalculator";
import NewsFeed from "@/components/report/NewsFeed";
import TDXCountdown from "@/components/report/TDXCountdown";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <NewsTicker />
      <TDXCountdown />
      <FinancialMetrics />
      <AgentforceSection />
      <ZeroCopyDiagram />
      <CompetitorEdge />
      <IndustryVerticals />
      <TrustLayer />
      <ROICalculator />
      <NewsFeed />

      {/* Footer */}
      <footer className="py-12 border-t border-border/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            Salesforce 2026 Agentic Era Report · Data sourced from public filings and official announcements
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Built with React, Framer Motion, and Recharts
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
