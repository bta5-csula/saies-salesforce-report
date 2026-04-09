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

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="glass-card-hover p-6 gradient-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <f.icon className="w-6 h-6 text-primary mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentforceSection;
