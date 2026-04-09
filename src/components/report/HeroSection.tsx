import { motion } from "framer-motion";
import { BlurText } from "@/components/ui/blur-text";
import { ArrowUpRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-visible h-[1000px] w-full flex flex-col items-center justify-start bg-black pb-32">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 top-[10%] w-full h-[90%] object-cover z-0 opacity-90 mix-blend-screen"
        poster="/images/hero_bg.jpeg"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay & fade to background at bottom to match the Salesforce theme below */}
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-b from-transparent to-background z-0 pointer-events-none" />

      {/* Fixed Navbar (Liquid Glass) */}
      <nav className="fixed top-6 left-0 right-0 z-50 px-8 lg:px-16 flex justify-between items-center pointer-events-auto">
        {/* Placeholder Logo space */}
        <div className="h-12 w-12 rounded-full liquid-glass flex items-center justify-center font-heading italic text-xl text-white">S</div>
        
        {/* Center Nav */}
        <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1 items-center space-x-1 shadow-lg">
          <a href="#report" onClick={(e) => { e.preventDefault(); document.getElementById('report')?.scrollIntoView({ behavior: 'smooth' }); }} className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors font-body">Report</a>
          <a href="#agentforce" onClick={(e) => { e.preventDefault(); document.getElementById('agentforce')?.scrollIntoView({ behavior: 'smooth' }); }} className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors font-body">Agentforce</a>
          <a href="#financials" onClick={(e) => { e.preventDefault(); document.getElementById('financials')?.scrollIntoView({ behavior: 'smooth' }); }} className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors font-body">Financials</a>
          <button 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="bg-white text-black rounded-full px-4 py-2 text-sm ml-2 flex items-center gap-1 font-body font-medium hover:bg-white/90 transition-colors"
          >
            Get the Data <ArrowUpRight className="w-4 h-4 text-black" />
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full pt-40 md:pt-48">
        {/* Sub-badge */}
        <div className="liquid-glass rounded-full p-1 pr-4 inline-flex items-center gap-3 mb-8 shadow-lg">
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            2026 Edition
          </span>
          <span className="text-sm text-white/90 font-body">Strategic Intelligence Report</span>
        </div>

        {/* Heading */}
        <BlurText 
          text="Salesforce <br/> Agentic Era"
          className="text-7xl md:text-8xl lg:text-[7.5rem] font-heading italic text-white leading-[0.8] max-w-4xl tracking-[-2px] text-center drop-shadow-2xl"
          delayDefault={0.1}
          delayByWord={0.15}
        />

        {/* Subtext */}
        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-lg md:text-xl text-white/90 font-body font-light leading-relaxed max-w-2xl text-center drop-shadow-md"
        >
          How autonomous AI agents, Zero-Copy architecture, and the world's largest CRM 
          are rewriting the rules of enterprise software.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
           initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
           animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 1.1 }}
           className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="liquid-glass-strong rounded-full px-8 py-4 font-body font-medium text-white flex items-center gap-2 hover:bg-white/10 transition-colors shadow-2xl"
          >
            Explore Report <ArrowUpRight className="w-4 h-4 text-white" />
          </button>
          <button 
            onClick={() => window.open('https://www.youtube.com/watch?v=5s_t8Jw3vNc', '_blank')}
            className="flex items-center gap-2 text-white/90 font-body font-medium hover:text-white transition-colors cursor-pointer px-4 drop-shadow-md"
          >
            <Play className="w-4 h-4 fill-white text-white" /> Watch Keynote
          </button>
        </motion.div>
      </div>

      {/* Original Stats */}
      <motion.div 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 1.5, duration: 1 }}
         className="relative z-10 mt-auto pt-20 pb-8 flex flex-col items-center justify-center w-full"
      >
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 w-full max-w-5xl px-4">
          {[
            { label: "2.4B Work Units", sub: "Delivered" },
            { label: "112T Records", sub: "Data Cloud" },
            { label: "29,000 Deals", sub: "Q4 Adoption" },
          ].map((stat, i) => (
            <div key={i} className="liquid-glass rounded-2xl px-6 py-4 flex flex-col items-center justify-center min-w-[200px]">
              <span className="text-3xl md:text-4xl font-heading italic text-white drop-shadow-md">{stat.label}</span>
              <span className="text-xs text-white/60 font-body uppercase tracking-wider mt-1">{stat.sub}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
