import { motion } from "framer-motion";
import { Heart, Building2, Landmark, Factory } from "lucide-react";
import { useState } from "react";

const verticals = [
  {
    id: "healthcare",
    icon: Heart,
    title: "Healthcare & Life Sciences",
    color: "text-sf-red",
    bgAccent: "bg-sf-red/10",
    features: [
      { name: "Real-Time Benefits Verification", desc: "Instant eligibility checks replacing 20-minute manual lookups" },
      { name: "Patient Intake Automation", desc: "Agentforce Health handles scheduling, forms, and triage autonomously" },
      { name: "AI Drug Candidate Identification", desc: "Data Cloud analyzes molecular data to accelerate drug discovery pipelines" },
    ],
  },
  {
    id: "financial",
    icon: Building2,
    title: "Financial Services",
    color: "text-sf-green",
    bgAccent: "bg-sf-green/10",
    features: [
      { name: "Next-Gen Wealth Advisors", desc: "AI agents provide personalized portfolio recommendations with real-time market data" },
      { name: "Automated KYC/AML Compliance", desc: "Built-in regulatory checks within Financial Services Cloud reduce compliance costs 60%" },
      { name: "Fraud Detection Agents", desc: "Real-time transaction monitoring with autonomous alert escalation" },
    ],
  },
  {
    id: "public",
    icon: Landmark,
    title: "Public Sector",
    color: "text-primary",
    bgAccent: "bg-primary/10",
    features: [
      { name: "Citizen Engagement Platform", desc: "Agentforce for Public Sector enables 24/7 automated citizen services" },
      { name: "Accelerated Complaint Resolution", desc: "AI agents triage and route cases, cutting resolution time by 45%" },
      { name: "Permit & License Processing", desc: "Automated workflows for government document processing" },
    ],
  },
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    color: "text-sf-orange",
    bgAccent: "bg-sf-orange/10",
    features: [
      { name: "Product Matching Agent", desc: "Handles 100,000+ SKUs in seconds with semantic understanding" },
      { name: "Supply Chain Intelligence", desc: "Predictive agents monitor disruptions and auto-adjust procurement" },
      { name: "Quality Assurance Automation", desc: "AI-powered inspection and defect detection at scale" },
    ],
  },
];

const IndustryVerticals = () => {
  const [active, setActive] = useState("healthcare");
  const current = verticals.find((v) => v.id === active)!;

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-wider uppercase">Vertical AI</p>
          <h2 className="section-title">Industry-Specific Breakthroughs</h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {verticals.map((v) => (
            <button
              key={v.id}
              onClick={() => setActive(v.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === v.id
                  ? "glass-card border-primary/40 text-foreground shadow-lg shadow-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              <v.icon className={`w-4 h-4 ${active === v.id ? v.color : ""}`} />
              <span className="hidden sm:inline">{v.title}</span>
              <span className="sm:hidden">{v.id.charAt(0).toUpperCase() + v.id.slice(1)}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={current.id}
          className="glass-card p-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-10 h-10 rounded-lg ${current.bgAccent} flex items-center justify-center`}>
              <current.icon className={`w-5 h-5 ${current.color}`} />
            </div>
            <h3 className="text-xl font-bold text-foreground">{current.title}</h3>
          </div>

          <div className="space-y-4">
            {current.features.map((f, i) => (
              <motion.div
                key={f.name}
                className="flex gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={`w-1 rounded-full ${current.bgAccent} flex-shrink-0`} style={{ backgroundColor: `hsl(var(--${current.color === 'text-primary' ? 'primary' : current.color.replace('text-', '').replace('-', '-')}))` }} />
                <div>
                  <p className="font-semibold text-foreground text-sm">{f.name}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryVerticals;
