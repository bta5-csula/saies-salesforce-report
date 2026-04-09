import { motion } from "framer-motion";
import { Newspaper, ExternalLink, RefreshCw } from "lucide-react";
import { useState } from "react";

interface NewsItem {
  title: string;
  source: string;
  date: string;
  url: string;
}

// Placeholder data — replace fetchNews with real API call
const placeholderNews: NewsItem[] = [
  { title: "Salesforce Reports Q4 FY2026: Agentforce ARR Hits $800M", source: "Reuters", date: "Apr 8, 2026", url: "#" },
  { title: "Data Cloud Now Processes 112 Trillion Records Annually", source: "TechCrunch", date: "Apr 7, 2026", url: "#" },
  { title: "Agentforce Builder Opens to All Developers at TDX 2026", source: "The Verge", date: "Apr 6, 2026", url: "#" },
  { title: "Salesforce Named World's Most Ethical Company — 17th Year", source: "Forbes", date: "Apr 5, 2026", url: "#" },
  { title: "Zero-Copy Architecture Adoption Surges 310% in Enterprise", source: "ZDNet", date: "Apr 4, 2026", url: "#" },
];

// Placeholder for real API integration
// async function fetchNews(): Promise<NewsItem[]> {
//   const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
//   const res = await fetch(`https://newsapi.org/v2/everything?q=salesforce+agentforce&apiKey=${API_KEY}`);
//   const data = await res.json();
//   return data.articles.map((a: any) => ({
//     title: a.title,
//     source: a.source.name,
//     date: new Date(a.publishedAt).toLocaleDateString(),
//     url: a.url,
//   }));
// }

const NewsFeed = () => {
  const [news] = useState<NewsItem[]>(placeholderNews);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-wider uppercase">Live Intelligence</p>
          <h2 className="section-title">Latest News</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {news.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-hover p-4 flex items-start gap-4 group block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Newspaper className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {item.title}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {item.source} · {item.date}
                </p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
            </motion.a>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          <RefreshCw className="w-3 h-3 inline mr-1" />
          Connect a News API key for live updates
        </p>
      </div>
    </section>
  );
};

export default NewsFeed;
