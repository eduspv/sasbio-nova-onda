import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TeamSection() {
  const images = [
    "/images/team/team-1.png",
    "/images/team/team-2.png",
    "/images/team/team-3.png",
    "/images/team/team-4.png",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  // ✅ destinos da logo (em % do container)
  // ordem: inf esq -> sup dir -> sup esq -> inf dir -> volta
  const logoTargets = useMemo(
    () => [
      { x: "80%", y: "80%" }, // bottom-right
      { x: "6%", y: "80%" },  // bottom-left
      { x: "6%", y: "6%" },   // top-left
      { x: "80%", y: "6%" },  // top-right
    ],
    []
  );

  const target = logoTargets[activeIndex % logoTargets.length];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 scientific-grid opacity-20" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              {/* ✅ SLIDESHOW COM BLUR + CROSSFADE */}
              <AnimatePresence mode="sync">
                <motion.img
                  key={activeIndex}
                  src={images[activeIndex]}
                  alt={`Equipe SASBIO ${activeIndex + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, filter: "blur(14px)", scale: 1.03 }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  exit={{ opacity: 0, filter: "blur(14px)", scale: 1.02 }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                />
              </AnimatePresence>

             

              {/* ✅ LOGO QUE "PASSA PELA FOTO" ATÉ O DESTINO */}
              <motion.div
                // deixa sempre no mesmo componente (sem key) pra animar movimento
                className="absolute z-20"
                style={{ left: 0, top: 0 }}
                animate={{
                  left: target.x,
                  top: target.y,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 16,
                  mass: 0.9,
                }}
              >
                {/* leve “tilt” enquanto move */}
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-18 h-18 rounded-xl bg-gradient-to-br from-sasbio-green-health to-sasbio-green-bright flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/logo/logo-sasbio-removebg.png"
                      alt="Logo SASBIO"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-sasbio-blue-tech/10 text-sasbio-blue-tech text-sm font-medium mb-6">
              Nossa Equipe
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Equipe de <span className="gradient-text">Especialistas</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Nosso time é formado por profissionais altamente capacitados, com formação em
              áreas como microbiologia, enfermagem, engenharia e gestão hospitalar.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Cada membro da equipe SASBIO passa por treinamentos contínuos e certificações
              que garantem a excelência em todos os serviços prestados. A combinação de
              conhecimento técnico e humanização é o que nos diferencia.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
