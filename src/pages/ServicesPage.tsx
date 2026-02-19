// src/pages/ServicesPage.tsx
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Sparkles, Shield, Droplets, Brain } from "lucide-react";

type Service = {
  id: string;
  icon: any;
  title: string;
  description: string;
  href: string;
  gradient: string; // Tailwind gradient for text
  iconGradient: string; // Tailwind gradient for icon bg
  image: string;
  heroGradient?: string; // CSS gradient overlay for hero
  duration?: number;
};

const services: Service[] = [
  {
    id: "biodescontaminacao",
    icon: Sparkles,
    title: "Biodescontaminação",
    description:
      "Eliminação total de patógenos com tecnologia de peróxido de hidrogênio vaporizado.",
    href: "/servicos/biodescontaminacao",
    gradient: "from-sasbio-blue-tech to-sasbio-blue-light",
    iconGradient: "from-sasbio-blue-tech to-sasbio-blue-light",
    image: "/images/services/biodescontaminacao-hero-service.png",
    duration: 6500,
  },
  {
    id: "sasmuv",
    icon: Shield,
    title: "SASMUV",
    description:
      "Solução móvel e acessível para controle de vetores, pragas e arbovíroses.",
    href: "/servicos/sasmuv",
    gradient: "from-sasbio-blue-light to-sasbio-green-health",
    iconGradient: "from-sasbio-green-health to-sasbio-green-bright",
    image: "/images/services/sasmuv-hero-services.png",
    heroGradient:
      "linear-gradient(135deg, rgba(0, 255, 34, 0.30) 0%, rgba(1,125,174,0.35) 55%, rgba(0,0,0,0.08) 100%)",
    duration: 6500,
  },
  {
    id: "banho-leito",
    icon: Droplets,
    title: "Banho no Leito",
    description:
      "Cuidado especializado para pacientes acamados com dignidade e conforto.",
    href: "/servicos/banho-no-leito",
    gradient: "from-sasbio-green-health to-sasbio-green-bright",
    iconGradient: "from-sasbio-blue-light to-sasbio-green-health",
    image: "/images/services/banho-no-leito.jpeg",
    heroGradient:
      "linear-gradient(135deg, rgba(0, 255, 34, 0.22) 0%, rgba(1,125,174,0.30) 55%, rgba(0,0,0,0.12) 100%)",
    duration: 6500,
  },
  {
    id: "saude-mental",
    icon: Brain,
    title: "Saúde Mental",
    description:
      "Tratamento e acompanhamento psicológico com abordagem moderna e acolhedora.",
    href: "/servicos/saude-mental",
    gradient: "from-sasbio-green-bright to-sasbio-blue-tech",
    iconGradient: "from-sasbio-blue-tech to-sasbio-green-health",
    image: "/images/services/saude-mental.jpeg",
    heroGradient:
      "linear-gradient(135deg, rgba(1,125,174,0.55) 0%, rgba(0, 255, 34, 0.18) 60%, rgba(0,0,0,0.12) 100%)",
    duration: 6500,
  },
];

function clampIndex(i: number, len: number) {
  if (len <= 0) return 0;
  return ((i % len) + len) % len;
}

const bgVariants = {
  enter: (dir: 1 | -1) => ({
    x: dir === 1 ? "100%" : "-100%",
    opacity: 1,
  }),
  center: {
    x: "0%",
    opacity: 1,
  },
  exit: (dir: 1 | -1) => ({
    x: dir === 1 ? "-100%" : "100%",
    opacity: 1,
  }),
};

export default function ServicesPage() {
  const slides = useMemo(() => services, []);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // ✅ Autoplay (garantindo 1 por 1)
  useEffect(() => {
    if (!isAutoPlaying) return;

    const duration = slides[currentSlide]?.duration ?? 6500;
    const t = window.setTimeout(() => {
      setDirection(1);
      setCurrentSlide((prev) => clampIndex(prev + 1, slides.length));
    }, duration);

    return () => window.clearTimeout(t);
  }, [isAutoPlaying, currentSlide, slides]);

  const goToSlide = (index: number) => {
    const next = clampIndex(index, slides.length);
    setDirection(next > currentSlide ? 1 : -1);
    setCurrentSlide(next);

    // pausa momentânea quando o usuário interage
    setIsAutoPlaying(false);
    window.setTimeout(() => setIsAutoPlaying(true), 9000);
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  const active = slides[currentSlide];

  return (
    <Layout>
      {/* HERO com slide (estilo Instagram) */}
      <section className="relative h-[85vh] min-h-[620px] overflow-hidden">
        {/* Background sliding */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.div
              key={`hero-bg-${currentSlide}`}
              custom={direction}
              variants={bgVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              {/* imagem */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("${active.image}")`,
                  backgroundSize: "cover",
                  backgroundPosition:
                    active.id === "biodescontaminacao" ? "50% 30%" : "center",
                  backgroundRepeat: "no-repeat",
                }}
              />

              {/* gradiente por cima */}
              {/* overlays do seu site */}
              <div className="absolute inset-0 scientific-grid opacity-10" />
              <div className="absolute inset-0 molecular-pattern opacity-30" />

              {/* vignette leve */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Conteúdo do hero */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={`hero-content-${currentSlide}`}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.55 }}
                className="max-w-3xl"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/12 backdrop-blur text-white text-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-white/70" />
                  Nossos Serviços
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white leading-tight">
                  {active.title}
                </h1>

                <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                  {active.description}
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link to={active.href}>
                    <Button
                      size="lg"
                      className="pill-button glow-button-green bg-gradient-to-r from-sasbio-green-health to-sasbio-green-bright text-white text-lg px-10 py-6 border-0 hover:opacity-90"
                    >
                      Ver serviço
                    </Button>
                  </Link>

                  <Link to="/contato">
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-10 py-6 rounded-2xl bg-white/10 text-white border-white/25 hover:bg-white/15"
                    >
                      Fale com a SASBIO
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* setas */}
        <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="pointer-events-auto w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="pointer-events-auto w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* indicadores */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => goToSlide(idx)}
              whileHover={{ scale: 1.15 }}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? "w-10 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Ir para o slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* SEÇÃO DE SERVIÇOS (grid do seu estilo) */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 molecular-pattern opacity-30" />
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 rounded-full bg-sasbio-blue-tech/5 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-sasbio-green-health/5 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-sasbio-green-health/10 text-sasbio-green-health text-sm font-medium mb-6">
              Nossos Serviços
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              O que e como <span className="gradient-text">Fazemos</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Soluções completas para biossegurança, prevenção e cuidado.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                >
                  <Link to={service.href}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="group relative h-full bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden"
                    >
                      {/* Image Top */}
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105
                            ${
                              service.id === "biodescontaminacao"
                                ? "object-[50%_30%]"
                                : "object-center"
                            }
                          `}
                          draggable={false}
                        />
                      </div>

                      {/* Content */}
                      <div className="relative p-8 pt-14">
                        {/* Icon floating */}
                        <motion.div
                          className={`absolute -top-8 left-8 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.iconGradient} flex items-center justify-center shadow-xl`}
                          whileHover={{ rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>

                        {/* Title */}
                        <h3
                          className={`font-display font-semibold text-xl mb-3 transition-all duration-300
                          text-foreground
                          group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${service.gradient}`}
                        >
                          {service.title}
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Hover Arrow */}
                      <motion.div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg
                          className="w-4 h-4 text-sasbio-blue-tech"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </motion.div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
