// ╔══════════════════════════════════════════════════════════════════╗
// ║  NewsFeed.tsx — Live News Integration                           ║
// ║  Strategy: RSS-to-JSON via rss2json.com (no API key required)  ║
// ║  Free tier: 10,000 req/day · No CORS issues · Works everywhere ║
// ╚══════════════════════════════════════════════════════════════════╝

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Newspaper, ExternalLink, RefreshCw, Rss } from "lucide-react";

interface NewsItem {
  title: string;
  source: string;
  date: string;
  url: string;
  cat: string;
}

// ─── Static fallback — shown instantly while live data loads ─────────────────
const FALLBACK_NEWS: NewsItem[] = [
  {
    title:
      "Salesforce Named to World's Most Ethical Companies List for 17th Year",
    source: "Salesforce News",
    date: "Mar 18, 2026",
    url: "https://www.salesforce.com/news/stories/most-ethical-companies-2026/",
    cat: "Governance",
  },
  {
    title:
      "Salesforce and U.S. Dept. of Labor Harness Agentforce to Enhance Citizen Support",
    source: "Salesforce News",
    date: "Mar 26, 2026",
    url: "https://www.salesforce.com/news/press-releases/2026/03/26/us-dept-labor-agentforce-enhance-citizen-support/",
    cat: "Government",
  },
  {
    title:
      "NVIDIA and Salesforce Deepen Partnership with New NVIDIA Nemotron-3B NIM for Regulated Industries",
    source: "Salesforce Stories",
    date: "Feb 12, 2026",
    url: "https://www.salesforce.com/news/stories/nvidia-nemotron-regulated-industries-announcement/",
    cat: "Partnership",
  },
  {
    title:
      "The State of Agentic Government: Insights into how AI Agents Are Transforming Public Service",
    source: "Salesforce News",
    date: "Feb 10, 2026",
    url: "https://www.salesforce.com/news/stories/agentic-government-insights-2026/",
    cat: "Insights",
  },
  {
    title:
      "Salesforce Named a Leader in 2026 Gartner® Magic Quadrant™ for Data Cloud",
    source: "Salesforce Stories",
    date: "Jan 12, 2026",
    url: "https://www.salesforce.com/news/stories/data-cloud-magic-quadrant/",
    cat: "Data Cloud",
  },
  {
    title:
      "Salesforce Announces Record Fourth Quarter and Full Year Fiscal 2025 Results",
    source: "Salesforce IR",
    date: "Feb 26, 2025",
    url: "https://www.salesforce.com/news/press-releases/2025/02/26/fy25-q4-earnings/",
    cat: "Financials",
  },
];

// ─── Live fetch strategy ──────────────────────────────────────────────────────
// Strategy 1: Direct browser fetch of Google News RSS (no proxy needed —
//   browsers are whitelisted by Google News). Parsed with native DOMParser.
// Strategy 2: rss2json.com fallback (Salesforce newsroom RSS).
// If both fail → curated FALLBACK_NEWS is silently kept.

const GOOGLE_NEWS_RSS =
  "https://news.google.com/rss/search?q=Salesforce+Agentforce&hl=en-US&gl=US&ceid=US:en";

// (parseRssXml removed as we now rely on json from the proxy)

async function fetchLiveNews(): Promise<NewsItem[]> {
  // Strategy: rss2json.com (free proxy, 10k req/day) avoids Google News CORS blocks
  const RSS_QUERY = encodeURIComponent(GOOGLE_NEWS_RSS);
  const rss2jsonRes = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=${RSS_QUERY}&count=6`,
  );
  const data = await rss2jsonRes.json();
  if (data.status !== "ok" || !Array.isArray(data.items)) {
    throw new Error("Live fetch strategy failed");
  }
  return data.items.map((item: Record<string, string>) => ({
    title: item.title.replace(/\s*-\s*[^-]+$/, ""),
    source: item.author || "Google News",
    date: new Date(item.pubDate).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    url: item.link,
    cat: "Live",
  }));
}

// ─── Component ────────────────────────────────────────────────────────────────
const NewsFeed = () => {
  const [news, setNews] = useState<NewsItem[]>(FALLBACK_NEWS);
  const [loading, setLoading] = useState(true);
  const [live, setLive] = useState(false);

  useEffect(() => {
    fetchLiveNews()
      .then((items) => {
        setNews(items);
        setLive(true);
      })
      .catch(() => {
        // Silently keep fallback curated news
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-wider uppercase">
            Live Intelligence
          </p>
          <h2 className="section-title">Latest News</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* ── Status Badge ── */}
          <div className="flex items-center justify-end mb-4">
            {loading ? (
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <RefreshCw className="w-3 h-3 animate-spin" />
                Loading live feed…
              </span>
            ) : live ? (
              <span className="flex items-center gap-1.5 text-xs font-medium text-sf-green">
                <span className="w-1.5 h-1.5 rounded-full bg-sf-green animate-pulse inline-block" />
                <Rss className="w-3 h-3" />
                Live · Google News
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Newspaper className="w-3 h-3" />
                Curated
              </span>
            )}
          </div>

          {/* ── Articles ── */}
          <div className="space-y-3">
            {news.map((item, i) => (
              <motion.a
                key={i}
                href={item.url === "#" ? undefined : item.url}
                target={item.url === "#" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="glass-card-hover p-4 flex items-start gap-3 group block"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <span className="text-[9px] px-1.5 py-0.5 rounded mt-0.5 whitespace-nowrap flex-shrink-0 font-medium bg-[hsl(var(--sf-blue)_/_0.13)] text-primary">
                  {item.cat}
                </span>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {item.source} · {item.date}
                  </p>
                </div>

                {item.url !== "#" && (
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                )}
              </motion.a>
            ))}
          </div>

          {/* ── Attribution ── */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            {live ? (
              <>
                <Rss className="w-3 h-3 inline mr-1" />
                Powered by rss2json.com + Google News RSS · No API key required
              </>
            ) : (
              <>
                <RefreshCw className="w-3 h-3 inline mr-1" />
                {loading
                  ? "Fetching live articles…"
                  : "Showing curated Salesforce FY2026 highlights"}
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsFeed;

// ─── UPGRADE NOTE ────────────────────────────────────────────────────────────
//
// For a server-side NewsAPI.org upgrade (never expose key in browser):
//
//   Create: /api/news.ts  (Vercel Serverless Function)
//   ────────────────────
//   export default async function handler(req, res) {
//     const url = `https://newsapi.org/v2/everything?q=Salesforce+Agentforce&sortBy=publishedAt&pageSize=6&apiKey=${process.env.NEWS_API_KEY}`
//     const data = await fetch(url).then(r => r.json())
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     res.json(data.articles ?? [])
//   }
//
//   Then in this component: fetch("/api/news") instead of RSS2JSON_URL.
//   Add NEWS_API_KEY (no VITE_ prefix) to Vercel env vars.
