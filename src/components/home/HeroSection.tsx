import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const slides = [
  {
    type: "image" as const,
    bg: "linear-gradient(135deg, #017DAE 0%, #48A8AA 50%, #42B652 100%)",
    title: "Biodescontaminação Hospitalar",
    subtitle: "Tecnologia avançada para eliminação de patógenos e ambientes 100% seguros",
    cta: { label: "Conheça o Serviço", href: "/servicos/biodescontaminacao" },
  },
  {
    type: "image" as const,
    bg: "linear-gradient(135deg, #42B652 0%, #2EB455 50%, #48A8AA 100%)",
    title: "SASMUV - Saúde em Movimento",
    subtitle: "Unidade móvel de atendimento com tecnologia e humanização",
    cta: { label: "Saiba Mais", href: "/servicos/sasmuv" },
  },
  {
    type: "image" as const,
    bg: "linear-gradient(135deg, #48A8AA 0%, #017DAE 50%, #2EB455 100%)",
    title: "Banho no Leito",
    subtitle: "Conforto e dignidade para pacientes com cuidado especializado",
    cta: { label: "Ver Detalhes", href: "/servicos/banho-no-leito" },
  },
  {
    type: "video" as const,
    bg: "linear-gradient(135deg, #017DAE 0%, #42B652 100%)",
    title: "Inovação em Biossegurança",
    subtitle: "Soluções completas para a saúde do futuro",
    cta: { label: "Fale Conosco", href: "/contato" },
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => goToSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => goToSlide((currentSlide - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
          style={{ background: slides[currentSlide].bg }}
        >
          {/* Scientific Pattern Overlay */}
          <div className="absolute inset-0 scientific-grid opacity-10" />
          <div className="absolute inset-0 molecular-pattern opacity-30" />
          
          {/* Animated Gradient Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/20"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{ 
              y: [null, Math.random() * -100 - 50],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{ 
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              {slides[currentSlide].type === "video" && (
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-white text-sm"
                >
                  <Play className="w-4 h-4" />
                  <span>Assista ao vídeo</span>
                </motion.div>
              )}
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link to={slides[currentSlide].cta.href}>
                  <Button 
                    size="lg"
                    className="pill-button glow-button-green bg-gradient-to-r from-sasbio-green-health to-sasbio-green-bright text-white text-lg px-10 py-6 border-0 hover:opacity-90"
                  >
                    {slides[currentSlide].cta.label}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevSlide}
          className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextSlide}
          className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "w-10 bg-white" 
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-white/60 text-sm"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="rotate-90">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
}
