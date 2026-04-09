import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Check, X, Minus } from "lucide-react";

const comparisonData = [
  { name: "Salesforce", score: 95, color: "hsl(197, 100%, 44%)" },
  { name: "Microsoft", score: 72, color: "hsl(260, 70%, 60%)" },
  { name: "Oracle", score: 58, color: "hsl(30, 90%, 55%)" },
];

const features = [
  { feature: "Native Data Cloud (Zero-Copy)", sf: true, ms: false, oracle: false },
  { feature: "Autonomous Agent Framework", sf: true, ms: "partial", oracle: false },
  { feature: "Integrated CRM + AI Platform", sf: true, ms: "partial", oracle: "partial" },
  { feature: "112T+ Records Processed", sf: true, ms: false, oracle: false },
  { feature: "Industry-Specific AI Agents", sf: true, ms: false, oracle: "partial" },
  { feature: "Einstein Trust Layer", sf: true, ms: false, oracle: false },
];

const StatusIcon = ({ status }: { status: boolean | string }) => {
  if (status === true) return <Check className="w-4 h-4 text-sf-green mx-auto" />;
  if (status === "partial") return <Minus className="w-4 h-4 text-sf-orange mx-auto" />;
  return <X className="w-4 h-4 text-sf-red/60 mx-auto" />;
};

const CompetitorEdge = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-wider uppercase">Competitive Analysis</p>
          <h2 className="section-title">Integrated Data vs. Bolted-On AI</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Chart */}
          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-foreground">AI Platform Maturity Score</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={comparisonData} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 18%)" />
                <XAxis type="number" domain={[0, 100]} tick={{ fill: 'hsl(215, 15%, 55%)', fontSize: 12 }} />
                <YAxis type="category" dataKey="name" tick={{ fill: 'hsl(210, 20%, 95%)', fontSize: 13, fontWeight: 500 }} width={90} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(220, 18%, 11%)',
                    border: '1px solid hsl(220, 15%, 18%)',
                    borderRadius: '8px',
                    color: 'hsl(210, 20%, 95%)',
                  }}
                />
                <Bar dataKey="score" radius={[0, 6, 6, 0]} barSize={28}>
                  {comparisonData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Feature matrix */}
          <motion.div
            className="glass-card p-6 overflow-auto"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-foreground">Feature Comparison</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-2 text-muted-foreground font-medium">Capability</th>
                  <th className="text-center py-2 text-primary font-semibold">Salesforce</th>
                  <th className="text-center py-2 text-sf-purple font-medium">Microsoft</th>
                  <th className="text-center py-2 text-sf-orange font-medium">Oracle</th>
                </tr>
              </thead>
              <tbody>
                {features.map((f) => (
                  <tr key={f.feature} className="border-b border-border/20">
                    <td className="py-3 text-foreground/80">{f.feature}</td>
                    <td className="py-3"><StatusIcon status={f.sf} /></td>
                    <td className="py-3"><StatusIcon status={f.ms} /></td>
                    <td className="py-3"><StatusIcon status={f.oracle} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompetitorEdge;
