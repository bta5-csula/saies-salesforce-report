import { motion } from "framer-motion";
import { Database, Cloud, Shield, ArrowRight, Eye } from "lucide-react";

const sources = [
  { name: "Snowflake", icon: Database },
  { name: "AWS S3", icon: Cloud },
  { name: "BigQuery", icon: Database },
];

const ZeroCopyDiagram = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-wider uppercase">Architecture Deep-Dive</p>
          <h2 className="section-title">Zero-Copy Data Strategy</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
            Salesforce Data Cloud "sees" external data without moving it — 53 trillion records processed
            via Zero Copy in FY2026, a 310% Y/Y increase.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 max-w-5xl mx-auto items-center">
          
          {/* Main Diagram Card */}
          <motion.div
            className="glass-card p-8 lg:p-10 w-full"
            initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* External Sources */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider text-center mb-2">External Data</p>
              {sources.map((s, i) => (
                <motion.div
                  key={s.name}
                  className="glass-card px-5 py-3 flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <s.icon className="w-4 h-4 text-sf-orange" />
                  <span className="text-sm font-medium text-foreground">{s.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center gap-2">
              <Eye className="w-5 h-5 text-primary" />
              <div className="flex items-center gap-1 text-primary">
                <ArrowRight className="w-4 h-4" />
                <ArrowRight className="w-4 h-4 -ml-2 opacity-60" />
              </div>
              <p className="text-xs font-mono text-primary">READ ONLY</p>
              <p className="text-[10px] text-muted-foreground">No data movement</p>
            </div>

            {/* Data Cloud */}
            <motion.div
              className="glass-card p-6 text-center pulse-glow gradient-border"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Cloud className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="font-bold text-foreground">Data Cloud</p>
              <p className="text-xs text-muted-foreground mt-1">112T records ingested</p>
              <p className="text-xs text-muted-foreground">53T via Zero Copy</p>
            </motion.div>

            {/* Arrow */}
            <div className="flex flex-col items-center gap-2">
              <ArrowRight className="w-4 h-4 text-sf-cyan" />
              <p className="text-xs font-mono text-sf-cyan">POWERS</p>
            </div>

            {/* Agentforce */}
            <motion.div
              className="glass-card p-6 text-center gradient-border"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Shield className="w-8 h-8 text-sf-green mx-auto mb-2" />
              <p className="font-bold text-foreground">Agentforce</p>
              <p className="text-xs text-muted-foreground mt-1">2.4B work units</p>
              <p className="text-xs text-muted-foreground">Autonomous agents</p>
            </motion.div>
          </div>

            <div className="mt-8 pt-6 border-t border-border/30 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              {[
                { label: "Cost Savings", desc: "No ETL pipelines needed" },
                { label: "Security Win", desc: "Data never leaves source" },
                { label: "Real-Time", desc: "Always-current insights" },
              ].map((b) => (
                <div key={b.label}>
                  <p className="text-sm font-semibold text-primary">{b.label}</p>
                  <p className="text-xs text-muted-foreground">{b.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Spring '26 Innovations List */}
          <motion.div
            className="glass-card p-8 lg:p-10 w-full flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-8 text-primary border-b border-border/40 pb-4 text-center">
              Spring '26 Release Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-10">
              {[
                { em: "⚡", title: "Agentforce Builder",        body: "Low-code/no-code deployment of fully autonomous agents. 350+ ISV partner templates. GA in Spring '26." },
                { em: "🧠", title: "Data Cloud as Agent Brain",  body: "112T records ingested (+114% Y/Y), 53T via Zero Copy (+310% Y/Y). Agents reason over real-time unified customer graphs — no data movement." },
                { em: "🔄", title: "Zero Copy Expansion",      body: "Salesforce reads data in Snowflake, AWS, and BigQuery in-place. Zero egress cost, zero security exposure to LLM providers." },
                { em: "🤝", title: "Agentforce + Slack", body: "2.4B Agentic Work Units delivered cumulative across Agentforce and Slack. 19 trillion tokens processed to date, up 5× Y/Y." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.em}</span>
                  <div>
                    <div className="text-base font-semibold mb-2 text-foreground">{item.title}</div>
                    <div className="text-sm leading-relaxed text-muted-foreground">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ZeroCopyDiagram;
