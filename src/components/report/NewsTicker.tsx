import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const headlines = [
  "🔵 TDX 2026: April 15–16 in San Francisco",
  "📊 Agentforce ARR reaches $800M — up 169% Y/Y",
  "🤖 2.4 billion Agentic Work Units delivered",
  "🏆 17th year as World's Most Ethical Company",
  "⚡ 29,000 Agentforce deals closed in Q4",
  "🔗 Zero-Copy processes 53 trillion records",
];

const NewsTicker = () => {
  return (
    <div className="w-full border-y border-border/30 bg-card/40 backdrop-blur-sm py-3 overflow-hidden">
      <div className="flex items-center">
        <div className="flex-shrink-0 px-4 flex items-center gap-2 border-r border-border/30 mr-4">
          <Zap className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-semibold text-primary uppercase tracking-wider whitespace-nowrap">Live</span>
        </div>
        <div className="overflow-hidden flex-1">
          <div className="ticker-scroll flex gap-12 whitespace-nowrap">
            {[...headlines, ...headlines].map((h, i) => (
              <span key={i} className="text-sm text-muted-foreground">{h}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
