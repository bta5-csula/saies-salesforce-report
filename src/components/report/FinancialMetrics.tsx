import { motion } from "framer-motion";
import { TrendingUp, DollarSign, BarChart3, Crown } from "lucide-react";

const metrics = [
  {
    icon: DollarSign,
    value: "$41.5B",
    label: "FY2026 Revenue",
    change: "+10% Y/Y",
    color: "text-sf-green",
  },
  {
    icon: TrendingUp,
    value: "$800M",
    label: "Agentforce ARR",
    change: "+169% Y/Y",
    color: "text-sf-cyan",
  },
  {
    icon: Crown,
    value: "~21%",
    label: "CRM Market Share",
    change: "#1 Worldwide",
    color: "text-primary",
  },
  {
    icon: BarChart3,
    value: "29,000",
    label: "Q4 Agentforce Deals",
    change: "Enterprise Adoption",
    color: "text-sf-purple",
  },
];

const FinancialMetrics = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-wider uppercase">Financial Performance</p>
          <h2 className="section-title">FY2026 Snapshot</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="glass-card-hover p-6 text-center gradient-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <m.icon className={`w-6 h-6 mx-auto mb-3 ${m.color}`} />
              <p className="metric-value mb-1">{m.value}</p>
              <p className="text-sm font-medium text-foreground mb-1">{m.label}</p>
              <span className="inline-block text-xs font-mono px-2 py-0.5 rounded-full bg-sf-green/10 text-sf-green">
                {m.change}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialMetrics;
