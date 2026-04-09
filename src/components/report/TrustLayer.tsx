import { motion } from "framer-motion";
import { Shield, Eye, Lock, AlertTriangle, FileCheck, Award } from "lucide-react";

const pillars = [
  {
    icon: Eye,
    title: "PII Masking",
    desc: "Automatic detection and redaction of personally identifiable information before AI processing",
  },
  {
    icon: Lock,
    title: "Zero-Data Retention",
    desc: "No customer data stored by LLM providers — prompts and outputs are ephemeral",
  },
  {
    icon: AlertTriangle,
    title: "Toxicity Detection",
    desc: "Real-time scanning prevents harmful, biased, or inappropriate AI outputs",
  },
  {
    icon: Shield,
    title: "Grounding & Hallucination Guard",
    desc: "Responses verified against trusted data sources to prevent AI fabrication",
  },
  {
    icon: FileCheck,
    title: "Audit Trail",
    desc: "Complete logging of every AI interaction for compliance and governance review",
  },
];

const TrustLayer = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-wider uppercase">Governance</p>
          <h2 className="section-title">The Einstein Trust Layer</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
            Five pillars of enterprise AI safety — aligned with the EU AI Act.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className="glass-card-hover p-5 text-center gradient-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <p.icon className="w-6 h-6 mx-auto mb-3 text-primary" />
              <p className="text-sm font-semibold text-foreground mb-1">{p.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Badge */}
        <motion.div
          className="glass-card p-6 max-w-md mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Award className="w-8 h-8 mx-auto mb-3 text-sf-green" />
          <p className="font-bold text-foreground">World's Most Ethical Companies</p>
          <p className="text-sm text-muted-foreground">17th consecutive year — Ethisphere Institute, 2026</p>
          <p className="text-xs text-muted-foreground mt-2">Fully compliant with EU AI Act requirements</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustLayer;
