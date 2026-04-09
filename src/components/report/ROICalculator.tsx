import { motion } from "framer-motion";
import { Calculator, TrendingUp } from "lucide-react";
import { useState, useMemo } from "react";

const ROICalculator = () => {
  const [volume, setVolume] = useState(10000);
  const [costPerCase, setCostPerCase] = useState(12);

  const results = useMemo(() => {
    const automationRate = 0.42; // 2026 benchmark
    const costReduction = 0.65; // per automated case
    const automatedCases = Math.round(volume * automationRate);
    const savings = Math.round(automatedCases * costPerCase * costReduction);
    const annualSavings = savings * 12;
    return { automatedCases, monthlySavings: savings, annualSavings };
  }, [volume, costPerCase]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-wider uppercase">Interactive</p>
          <h2 className="section-title">Agentforce ROI Calculator</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
            Based on 2026 automation benchmarks: 42% service case automation rate, 65% cost reduction per automated case.
          </p>
        </motion.div>

        <motion.div
          className="glass-card p-8 max-w-xl mx-auto gradient-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <div>
              <label className="flex justify-between text-sm mb-2">
                <span className="text-foreground font-medium">Monthly Service Volume</span>
                <span className="font-mono text-primary">{volume.toLocaleString()}</span>
              </label>
              <input
                type="range"
                min={1000}
                max={100000}
                step={1000}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer bg-secondary accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>1K</span><span>100K</span>
              </div>
            </div>

            <div>
              <label className="flex justify-between text-sm mb-2">
                <span className="text-foreground font-medium">Cost per Case ($)</span>
                <span className="font-mono text-primary">${costPerCase}</span>
              </label>
              <input
                type="range"
                min={5}
                max={50}
                step={1}
                value={costPerCase}
                onChange={(e) => setCostPerCase(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer bg-secondary accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>$5</span><span>$50</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/30 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Cases Automated</p>
              <p className="text-xl font-bold text-sf-cyan">{results.automatedCases.toLocaleString()}</p>
              <p className="text-[10px] text-muted-foreground">per month</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Monthly Savings</p>
              <p className="text-xl font-bold text-sf-green">${results.monthlySavings.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Annual ROI</p>
              <p className="text-xl font-bold" style={{
                background: 'linear-gradient(135deg, hsl(197 100% 44%), hsl(155 70% 45%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                ${results.annualSavings.toLocaleString()}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculator;
