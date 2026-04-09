import { motion } from "framer-motion";
import { Bot, Cpu, Layers, Wrench } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Agentforce Platform",
    desc: "2.4 billion Agentic Work Units delivered — autonomous agents that reason, plan, and execute across every Salesforce cloud.",
  },
  {
    icon: Wrench,
    title: "Agentforce Builder",
    desc: "Low-code agent creation with natural language instructions, pre-built skills library, and declarative guardrails.",
  },
  {
    icon: Layers,
    title: "Data Cloud — The Brain",
    desc: "112 trillion records ingested annually. 53 trillion processed via Zero Copy (310% Y/Y). The unified intelligence layer powering every agent.",
  },
  {
    icon: Cpu,
    title: "Spring '26 Release",
    desc: "Multi-agent orchestration, cross-cloud handoffs, and enhanced reasoning chains — the most ambitious platform release in Salesforce history.",
  },
];

import { Meteors } from "@/components/ui/meteors";

const AgentforceSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-wider uppercase">Innovation & Product</p>
          <h2 className="section-title">The Agentforce Era</h2>
        </motion.div>

        {/* ── Aceternity Bento Grid Layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className={`relative overflow-hidden glass-card-hover p-8 gradient-border flex flex-col justify-end min-h-[220px] ${
                i === 0 ? "md:col-span-2" : i === 3 ? "md:col-span-2" : "md:col-span-1"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Aceternity Meteors Effect in large cards */}
              {(i === 0 || i === 3) && <Meteors number={20} className="opacity-60" />}

              <div className="relative z-10">
                <f.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentforceSection;
