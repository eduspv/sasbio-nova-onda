import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

type SlideBase = {
  type: "image" | "video";
  image: string;
  gradient?: string;
  title: string;
  subtitle: string | string[]; // ✅ agora aceita múltiplas linhas
  cta: { label: string; href: string };
  /** Duração do slide em ms (ex: 6000 = 6s). */
  duration?: number;
};

const slides: SlideBase[] = [
  {
    type: "image",
    image: "/images/hero/imagem-tecnologia.jpeg",
    gradient:
      "linear-gradient(135deg, rgba(1,125,174,0.55) 0%, rgba(0, 136, 255, 0.31) 50%, rgba(0, 255, 34, 0.35) 100%)",
    title: "ESPECIALISTA EM SAÚDE DE ALTA PERFORMANCE",
    subtitle: "Ciência que protege, tecnologia que produz segurança",
    cta: { label: "Conheça os nossos Serviços", href: "/servicos" },
    duration: 6000,
  },
  {
    type: "image",
    image: "/images/hero/biodescontaminacao.png",
    gradient:
      "linear-gradient(135deg, rgba(1,125,174,0.55) 0%, rgba(0, 136, 255, 0.31) 50%, rgba(0, 255, 34, 0.35) 100%)",
    title: "Biodescontaminação",
    subtitle:
      "Tecnologia avançada para eliminação de microorganismos prejudicias a saúde humana",
    cta: { label: "Conheça o Serviço", href: "/servicos/biodescontaminacao" },
    duration: 6000,
  },
  {
    type: "image",
    image: "/images/hero/SASMUV.png",
    gradient:
      "linear-gradient(135deg, rgba(1,125,174,0.55) 0%, rgba(0, 136, 255, 0.31) 50%, rgba(0, 255, 34, 0.35) 100%)",
    title: "SASMUV",
    subtitle: ["combate e eliminação de arbovíroses","controle de pragas e vetores" ],
    cta: { label: "Saiba Mais", href: "/servicos/sasmuv" },
    duration: 6000,
  },
  {
    type: "image",
    image: "/images/hero/banho-no-leito.png",
    gradient:
      "linear-gradient(135deg, rgba(1,125,174,0.55) 0%, rgba(0, 136, 255, 0.31) 50%, rgba(0, 255, 34, 0.35) 100%)",
    title: "Banho no Leito",
    subtitle: "Conforto e dignidade para pacientes acamados",
    cta: { label: "Ver Detalhes", href: "/servicos/banho-no-leito" },
    duration: 6000,
  },
  {
    type: "image",
    image: "/images/hero/saude-mental.png",
    gradient:
      "linear-gradient(135deg, rgba(1,125,174,0.55) 0%, rgba(0, 136, 255, 0.31) 50%, rgba(0, 255, 34, 0.35) 100%)",
    title: "Saúde Mental",
    subtitle: "Mente saudável, vida empresarial produtiva",
    cta: { label: "Ver Detalhes", href: "/servicos/saude-mental" },
    duration: 6000,
  },
  {
    type: "video",
    image: "/images/hero/video-sasbio.mp4",
    title: "Inovação em Biossegurança",
    subtitle: "Soluções completas para a saúde do futuro",
    cta: { label: "Fale Conosco", href: "/contato" },
    duration: 70000,
  },
];

export function HeroSection() {
const [currentSlide, setCurrentSlide] = useState(0);
const [isAutoPlaying, setIsAutoPlaying] = useState(true);
const [direction, setDirection] = useState<1 | -1>(1);

  // ✅ timeout por slide (cada um com sua duração)
  useEffect(() => {
    if (!isAutoPlaying) return;

    const duration = slides[currentSlide]?.duration ?? 6000;

    const timeout = window.setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, duration);

    return () => window.clearTimeout(timeout);
  }, [isAutoPlaying, currentSlide]);

const goToSlide = (index: number) => {
  setDirection(index > currentSlide ? 1 : -1);
  setCurrentSlide(index);
  setIsAutoPlaying(false);
  window.setTimeout(() => setIsAutoPlaying(true), 10000);
};

const nextSlide = () => {
  setDirection(1);
  goToSlide((currentSlide + 1) % slides.length);
};

const prevSlide = () => {
  setDirection(-1);
  goToSlide((currentSlide - 1 + slides.length) % slides.length);
};

  const isVideo = slides[currentSlide].type === "video";

  // ✅ evita erro com window no SSR e dá mais estabilidade
  const [viewport, setViewport] = useState({ w: 1200, h: 800 });
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


  return (
    <section className="relative h-screen overflow-hidden">
     {/* ✅ BACKGROUND: slide horizontal (estilo Instagram) */}
<div className="absolute inset-0 overflow-hidden">
  <AnimatePresence initial={false} custom={direction} mode="sync">
    <motion.div
      key={`bg-${currentSlide}`}
      custom={direction}
      variants={bgVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0"
    >
      {isVideo ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={slides[currentSlide].image}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("${slides[currentSlide].image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      {/* gradient por cima */}
      {slides[currentSlide].gradient && (
        <div
          className="absolute inset-0"
          style={{ backgroundImage: slides[currentSlide].gradient }}
        />
      )}

      {/* overlays */}
      <div className="absolute inset-0 scientific-grid opacity-10" />
      <div className="absolute inset-0 molecular-pattern opacity-30" />

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent bg-[length:200%_200%]"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  </AnimatePresence>
</div>


      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/20"
            initial={{
              x: Math.random() * viewport.w,
              y: Math.random() * viewport.h,
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* ✅ CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        {/* ✅ container precisa ser relative para a watermark absolute funcionar certo */}
        <div className="container mx-auto px-4 relative">
          {/* ✅ Logo watermark (suma e reapareça a cada slide) */}
          <AnimatePresence mode="wait">
            {!isVideo && (
              <motion.div
                key={`watermark-${currentSlide}`}
                initial={{ opacity: 0, scale: 0.98, filter: "blur(2px)" }}
                animate={{ opacity: 0.1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.02, filter: "blur(3px)" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 pointer-events-none"
              >

              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 max-w-3xl"
            >
              {isVideo && (
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

              {/* ✅ Subtitle com suporte a múltiplas linhas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed space-y-2"
              >
                {Array.isArray(slides[currentSlide].subtitle) ? (
                  slides[currentSlide].subtitle.map((line, i) => <p key={i}>{line}</p>)
                ) : (
                  <p>{slides[currentSlide].subtitle}</p>
                )}
              </motion.div>

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
          className="pointer-events-auto w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextSlide}
          className="pointer-events-auto w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
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
              index === currentSlide ? "w-10 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
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
