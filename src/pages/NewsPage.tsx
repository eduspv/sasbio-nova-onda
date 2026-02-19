import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Calendar, ArrowRight } from "lucide-react";
import { newsData, type NewsItem } from "@/content/news";
import { NewsModal } from "@/components/news/NewsModal";
import { NewsHeroCarousel } from "@/components/news/NewsHeroCarousel";

const NewsPage = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<NewsItem | null>(null);

  const ordered = useMemo(() => {
    return [...newsData].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  }, []);

  const openNews = (n: NewsItem) => {
    setSelected(n);
    setOpen(true);
  };

  return (
    <Layout>
{/* Hero */}
<section className="relative min-h-[40vh] flex items-center overflow-hidden">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/NewsPage/hero.png')" }}
  />

  {/* Overlays */}
  <div className="absolute inset-0 bg-gradient-to-br from-sasbio-blue-tech/80 via-sasbio-blue-light/60 to-sasbio-green-health/60" />
  <div className="absolute inset-0 scientific-grid opacity-10" />
  <div className="absolute inset-0 molecular-pattern opacity-20" />

  <div className="container mx-auto px-4 relative pt-24 w-full">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto"
    >
      <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
        Blog & Notícias
      </span>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
        Notícias
      </h1>

      <p className="text-xl text-white/90">
        Acompanhe as novidades da SASBIO
      </p>
    </motion.div>

    {/* ✅ últimas 3 notícias (carrossel) */}
    <div className="mt-10">
      <NewsHeroCarousel
        items={ordered.slice(0, 3)}
        onOpen={openNews}
      />
    </div>
  </div>
</section>



      {/* News Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ordered.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <button
                  type="button"
                  onClick={() => openNews(news)}
                  className="text-left w-full"
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group h-full bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white text-xs font-medium">
                          {news.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(news.date).toLocaleDateString("pt-BR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>

                      <h2 className="font-display font-semibold text-xl text-foreground mb-3 group-hover:text-sasbio-blue-tech transition-colors">
                        {news.title}
                      </h2>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {news.excerpt}
                      </p>

                      <div className="flex items-center text-sasbio-blue-tech font-medium text-sm group-hover:gap-2 transition-all">
                        <span>Ler mais</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-1 transition-all" />
                      </div>
                    </div>
                  </motion.div>
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Modal */}
      <NewsModal open={open} news={selected} onClose={() => setOpen(false)} />
    </Layout>
  );
};

export default NewsPage;
