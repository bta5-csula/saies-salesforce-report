import { motion } from "framer-motion";
import { TrendingUp, DollarSign, BarChart3, Crown } from "lucide-react";
import {
  AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
} from "recharts";

const metrics = [
  { icon: DollarSign, value: "$41.5B", label: "FY2026 Revenue", change: "+10% Y/Y", color: "text-sf-green" },
  { icon: TrendingUp, value: "$800M", label: "Agentforce ARR", change: "+169% Y/Y", color: "text-sf-cyan" },
  { icon: Crown, value: "~21%", label: "CRM Market Share", change: "#1 Worldwide", color: "text-primary" },
  { icon: BarChart3, value: "29,000", label: "Q4 Agentforce Deals", change: "Enterprise Adoption", color: "text-sf-purple" },
];

const revenueData = [
  { q: "Q1 FY25", total: 9.1,  agentforce: 0.05 },
  { q: "Q2 FY25", total: 9.3,  agentforce: 0.12 },
  { q: "Q3 FY25", total: 9.9,  agentforce: 0.22 },
  { q: "Q4 FY25", total: 10.1, agentforce: 0.30 },
  { q: "Q1 FY26", total: 9.8,  agentforce: 0.42 },
  { q: "Q2 FY26", total: 10.2, agentforce: 0.58 },
  { q: "Q3 FY26", total: 10.6, agentforce: 0.70 },
  { q: "Q4 FY26", total: 11.0, agentforce: 0.80 },
];

const competitorData = [
  { name: "CRM Share", salesforce: 21,  microsoft: 5.9, oracle: 3.5 },
  { name: "AI Depth",  salesforce: 9.2, microsoft: 8.1, oracle: 6.8 },
  { name: "Data Unif.",salesforce: 9.5, microsoft: 7.2, oracle: 6.1 },
  { name: "Trust",     salesforce: 9.1, microsoft: 8.3, oracle: 7.4 },
];

const COMP_COLORS = { salesforce: "#00A1E0", microsoft: "#7C3AED", oracle: "#E74C3C" };

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

        {/* Top KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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

        {/* Data Charting Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Revenue Trajectory AreaChart */}
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              Revenue Trajectory
            </h3>
            <p className="text-xs text-muted-foreground mb-6">
              Quarterly Total Revenue ($B) + Agentforce ARR overlay
            </p>
            
            <div className="flex gap-4 mb-4 text-xs font-medium">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <span className="w-3 h-0.5 rounded-full bg-primary inline-block" />
                Total Revenue
              </span>
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <span className="w-3 h-0.5 rounded-full bg-sf-cyan inline-block" />
                Agentforce ARR
              </span>
            </div>
            
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={revenueData} margin={{ left: -20, right: 10 }}>
                <defs>
                  <linearGradient id="gradTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#00A1E0" stopOpacity={0.28} />
                    <stop offset="95%" stopColor="#00A1E0" stopOpacity={0}    />
                  </linearGradient>
                  <linearGradient id="gradAgent" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#00D4FF" stopOpacity={0.38} />
                    <stop offset="95%" stopColor="#00D4FF" stopOpacity={0}    />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="q" tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ background: "#0a1628", border: `1px solid rgba(255,255,255,0.1)`, borderRadius: 8, fontSize: 12 }}
                  labelStyle={{ color: "rgba(255,255,255,0.8)", marginBottom: 4 }}
                />
                <Area type="monotone" dataKey="total" stroke="#00A1E0" fill="url(#gradTotal)" strokeWidth={2} />
                <Area type="monotone" dataKey="agentforce" stroke="#00D4FF" fill="url(#gradAgent)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Competitor BarChart */}
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              Competitive Intelligence
            </h3>
            <p className="text-xs text-muted-foreground mb-6">
              Integrated Data vs. Bolted-On AI Architectures
            </p>
            
            <div className="flex gap-4 mb-4 text-xs font-medium">
              {Object.entries(COMP_COLORS).map(([k, v]) => (
                <span key={k} className="flex items-center gap-1.5 capitalize text-muted-foreground">
                  <span className="w-2 h-2 rounded-sm inline-block" style={{ background: v }} />
                  {k}
                </span>
              ))}
            </div>
            
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={competitorData} margin={{ left: -20, right: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ background: "#0a1628", border: `1px solid rgba(255,255,255,0.1)`, borderRadius: 8, fontSize: 12 }}
                  labelStyle={{ color: "rgba(255,255,255,0.8)", marginBottom: 4 }}
                  cursor={{ fill: "rgba(255,255,255,0.02)" }}
                />
                <Bar dataKey="salesforce" fill={COMP_COLORS.salesforce} radius={[4,4,0,0]} />
                <Bar dataKey="microsoft"  fill={COMP_COLORS.microsoft}  radius={[4,4,0,0]} />
                <Bar dataKey="oracle"     fill={COMP_COLORS.oracle}     radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FinancialMetrics;
