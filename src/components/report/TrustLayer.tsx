import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  Lock,
  AlertTriangle,
  FileCheck,
  Award,
} from "lucide-react";

const CERTS = [
  "EU AI Act",
  "FedRAMP High",
  "ISO 27001",
  "SOC 2 Type II",
  "GDPR",
  "CCPA",
  "HIPAA BAA",
];

const pillars = [
  {
    icon: Eye,
    badge: "Real-Time",
    colorClass: "text-primary",
    bgAccent: "bg-primary/10",
    borderAccent: "border-primary/30",
    hoverGlow: "hsl(var(--sf-blue) / 0.12)",
    hoverBorder: "hsl(var(--sf-blue) / 0.45)",
    title: "PII Masking",
    desc: "Automatically detects and redacts personal identifiable information before any data reaches an LLM provider. Zero-exposure guarantee across all 17 Salesforce AI models. Masks names, emails, SSNs, PHI, and financial identifiers inline.",
  },
  {
    icon: Lock,
    badge: "Tier 1",
    colorClass: "text-sf-cyan",
    bgAccent: "bg-sf-cyan/10",
    borderAccent: "border-sf-cyan/30",
    hoverGlow: "hsl(var(--sf-cyan) / 0.12)",
    hoverBorder: "hsl(var(--sf-cyan) / 0.45)",
    title: "Zero Data Retention",
    desc: "Prompts and completions are never persisted by third-party AI providers. Data exists in-flight only — purged within milliseconds post-inference. Salesforce's contractual ZDR agreements cover OpenAI, Anthropic, Google, and Azure OpenAI.",
  },
  {
    icon: AlertTriangle,
    badge: "Multi-Layer",
    colorClass: "text-sf-purple",
    bgAccent: "bg-sf-purple/10",
    borderAccent: "border-sf-purple/30",
    hoverGlow: "hsl(var(--sf-purple) / 0.12)",
    hoverBorder: "hsl(var(--sf-purple) / 0.45)",
    title: "Toxicity Detection",
    desc: "Multi-layer content filtering prevents harmful, biased, or off-brand outputs at both input and output stages. Fully configurable thresholds per org, department, and agent use-case. Blocks prompt injection and jailbreak attempts.",
  },
  {
    icon: Shield,
    badge: "Full Audit",
    colorClass: "text-sf-orange",
    bgAccent: "bg-sf-orange/10",
    borderAccent: "border-sf-orange/30",
    hoverGlow: "hsl(var(--sf-orange) / 0.12)",
    hoverBorder: "hsl(var(--sf-orange) / 0.45)",
    title: "Grounding & Audit Trail",
    desc: "Every AI decision is anchored to your verified Salesforce data — not hallucinated. Automatic audit log of all agent actions, tool calls, and data accesses. Reviewable in real-time by admins. SIEM-exportable for compliance teams.",
  },
  {
    icon: FileCheck,
    badge: "17× Ethisphere",
    colorClass: "text-sf-green",
    bgAccent: "bg-sf-green/10",
    borderAccent: "border-sf-green/30",
    hoverGlow: "hsl(var(--sf-green) / 0.12)",
    hoverBorder: "hsl(var(--sf-green) / 0.45)",
    title: "Compliance & Governance",
    desc: "17th consecutive year on Ethisphere's World's Most Ethical Companies list. EU AI Act Article 13 aligned. FedRAMP High. ISO 27001/27701. SOC 2 Type II. GDPR and CCPA compliant by default. HIPAA BAA available.",
  },
];

const TrustLayer = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        {/* ── Section header ── */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-wider uppercase">
            Governance
          </p>
          <h2 className="section-title">The Einstein Trust Layer</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
            Five pillars of enterprise AI safety — aligned with the EU AI Act.
          </p>
        </motion.div>

        {/* ── Compliance cert banner ── */}
        <motion.div
          className="glass-card p-6 max-w-5xl mx-auto mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-[hsl(var(--sf-blue)_/_0.28)]"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{
            background:
              "linear-gradient(135deg, rgba(0,161,224,0.08), rgba(26,189,214,0.04))",
          }}
        >
          <div>
            <p className="text-xs font-mono text-primary uppercase tracking-wider mb-1">
              Einstein Trust Layer · Spring 2026
            </p>
            <p className="text-xl font-bold text-foreground">
              Five Pillars of Responsible AI
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              17× World's Most Ethical Company · EU AI Act Tier-1 Aligned ·
              FedRAMP High
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {CERTS.map((c) => (
              <span
                key={c}
                className="text-[9px] px-2 py-0.5 rounded-full whitespace-nowrap font-medium bg-[hsl(var(--sf-blue)_/_0.12)] border border-[hsl(var(--sf-blue)_/_0.28)] text-primary"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Five Pillars grid ── */}
        <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className="glass-card-hover p-5 flex flex-col gap-3 gradient-border group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{ transition: "border-color 0.3s, box-shadow 0.3s" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 0 28px ${p.hoverGlow}`;
                (e.currentTarget as HTMLElement).style.borderColor =
                  p.hoverBorder;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "";
                (e.currentTarget as HTMLElement).style.borderColor = "";
              }}
            >
              {/* Icon + badge */}
              <div className="flex items-start justify-between">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${p.bgAccent} border ${p.borderAccent}`}
                >
                  <p.icon className={`w-5 h-5 ${p.colorClass}`} />
                </div>
                <span
                  className={`text-[9px] px-2 py-0.5 rounded-full font-semibold ${p.bgAccent} ${p.colorClass}`}
                >
                  {p.badge}
                </span>
              </div>

              {/* Text */}
              <div className="flex-1">
                <p className={`text-sm font-semibold mb-1.5 ${p.colorClass}`}>
                  {p.title}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>

              {/* Colour accent bar */}
              <div
                className={`h-0.5 rounded-full mt-auto`}
                style={{
                  background: `linear-gradient(to right, ${p.hoverBorder}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* ── Ethisphere banner ── */}
        <motion.div
          className="glass-card p-5 max-w-5xl mx-auto flex items-center gap-4 bg-[hsl(var(--sf-green)_/_0.07)] border-[hsl(var(--sf-green)_/_0.2)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Award className="w-8 h-8 flex-shrink-0 text-sf-green" />
          <div>
            <p className="font-bold text-sf-green">
              World's Most Ethical Companies — 17th Consecutive Year
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Ethisphere Institute, 2026 · One of only 4 tech companies to
              maintain this designation every year since 2010
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustLayer;
