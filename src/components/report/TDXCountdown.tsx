import { motion } from "framer-motion";
import { Calendar, MapPin, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const TDX_DATE = new Date("2026-04-15T09:00:00-07:00");

const TDXCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = TDX_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, live: true };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
      live: false,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <motion.div
          className="glass-card p-6 max-w-2xl mx-auto text-center gradient-border overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-primary/10 blur-3xl rounded-full" />

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              {timeLeft.live ? (
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sf-green/10 text-sf-green text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-sf-green animate-pulse" />
                  LIVE NOW
                </span>
              ) : (
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  <Zap className="w-3 h-3" />
                  COUNTDOWN
                </span>
              )}
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">TrailblazerDX 2026</h3>
            <p className="flex items-center justify-center gap-3 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> April 15–16</span>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> San Francisco</span>
            </p>

            {!timeLeft.live && (
              <div className="flex justify-center gap-3">
                {[
                  { value: timeLeft.days, label: "Days" },
                  { value: timeLeft.hours, label: "Hours" },
                  { value: timeLeft.minutes, label: "Min" },
                  { value: timeLeft.seconds, label: "Sec" },
                ].map((t) => (
                  <div key={t.label} className="glass-card px-4 py-3 min-w-[64px]">
                    <p className="text-2xl font-mono font-bold text-primary">{String(t.value).padStart(2, "0")}</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{t.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TDXCountdown;
