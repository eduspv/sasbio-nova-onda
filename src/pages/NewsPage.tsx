import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Calendar, ArrowRight } from "lucide-react";

const newsData = [
  {
    id: 1,
    slug: "sasbio-expande-para-novos-estados",
    title: "SASBIO expande operações para mais 5 estados",
    excerpt: "A empresa anuncia expansão de suas operações para novos territórios, ampliando sua presença nacional.",
    date: "2024-01-15",
    category: "Expansão",
  },
  {
    id: 2,
    slug: "nova-tecnologia-biodescontaminacao",
    title: "Nova tecnologia de biodescontaminação chega ao Brasil",
    excerpt: "SASBIO traz equipamentos de última geração para o mercado brasileiro, aumentando a eficácia dos processos.",
    date: "2024-01-10",
    category: "Tecnologia",
  },
  {
    id: 3,
    slug: "parceria-hospitais-referencia",
    title: "Parceria com hospitais de referência é ampliada",
    excerpt: "Novos contratos firmados com instituições renomadas reforçam a confiança no trabalho da SASBIO.",
    date: "2024-01-05",
    category: "Parcerias",
  },
  {
    id: 4,
    slug: "certificacao-internacional-conquistada",
    title: "SASBIO conquista certificação internacional",
    excerpt: "Reconhecimento global atesta a qualidade e eficiência dos serviços prestados pela empresa.",
    date: "2023-12-20",
    category: "Certificações",
  },
  {
    id: 5,
    slug: "programa-franquias-lancado",
    title: "Programa de franquias é oficialmente lançado",
    excerpt: "Empreendedores interessados podem agora fazer parte da rede SASBIO em todo o Brasil.",
    date: "2023-12-15",
    category: "Franquias",
  },
  {
    id: 6,
    slug: "sasbio-no-congresso-saude",
    title: "SASBIO marca presença em congresso de saúde",
    excerpt: "Equipe apresenta inovações e cases de sucesso em evento do setor hospitalar.",
    date: "2023-12-10",
    category: "Eventos",
  },
];

const NewsPage = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-sasbio-blue-tech via-sasbio-blue-light to-sasbio-green-health">
        <div className="absolute inset-0 scientific-grid opacity-10" />
        <div className="absolute inset-0 molecular-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative pt-24">
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
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(news.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link to={`/noticias/${news.slug}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group h-full bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                  >
                    {/* Image Placeholder */}
                    <div className="relative h-48 bg-gradient-to-br from-sasbio-blue-tech to-sasbio-green-health overflow-hidden">
                      <motion.div 
                        className="absolute inset-0 bg-black/20"
                        animate={{ opacity: hoveredCard === news.id ? 0 : 0.2 }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/50 font-display text-4xl font-bold">SB</span>
                      </div>
                      
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
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsPage;
