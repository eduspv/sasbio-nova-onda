import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function WhyChooseSection() {
  const [showCertificateMessage, setShowCertificateMessage] = useState(false);

  const handleSealClick = () => {
    setShowCertificateMessage(true);
    setTimeout(() => setShowCertificateMessage(false), 3000);
  };

  return (
<section className="relative overflow-hidden min-h-[100vh]">
      {/* ✅ BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/images/WhyChoose/sala-vazia.png"
          alt="Background SASBIO"
          className="w-full h-full object-cover"
        />

        {/* ✅ GRADIENT POR CIMA DA IMAGEM */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(1,125,174,0.75) 0%, rgba(72,168,170,0.65) 50%, rgba(66,182,82,0.75) 100%)",
              "linear-gradient(135deg, rgba(66,182,82,0.75) 0%, rgba(1,125,174,0.65) 50%, rgba(72,168,170,0.75) 100%)",
              "linear-gradient(135deg, rgba(1,125,174,0.75) 0%, rgba(72,168,170,0.65) 50%, rgba(66,182,82,0.75) 100%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Patterns (opcional) */}
        <div className="absolute inset-0 scientific-grid opacity-10" />
        <div className="absolute inset-0 molecular-pattern opacity-20" />

        {/* ✅ LOGO WATERMARK (melhor enquadrada) */}
<div className="pointer-events-none absolute inset-0">
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
    <img
      src="/images/logo/sasbio-logo-semfundo.png"
      alt="SASBIO"
      className="
        w-[520px] md:w-[680px] lg:w-[760px]
        opacity-[0.08]
        object-contain
        select-none
      "
    />
  </div>
</div>
      </div>

      {/* ✅ CONTENT */}
      <div className="relative py-24">
        <div className="container mx-auto px-4">
          {/* ✅ TITLE TOP */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur text-white text-sm font-medium mb-6">
              Diferenciais
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
              Por que escolher a{" "}
              SASBIO?
            </h2>

            <p className="text-white/85 text-lg mt-4">
              SEU LOCAL PROTEGIDO CONTRA VÍRUS E BACTÉRIAS E OUTROS PATÓGENOS.
            </p>
          </motion.div>

          {/* ✅ LAYOUT: LEFT TEXT / CENTER SEAL / RIGHT TEXT */}
          <div className="grid lg:grid-cols-3 gap-10 items-center mt-[-40px] lg:mt-[-90px]">
            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-white -mt-6 lg:-mt-56 ml-6 lg:ml-28"
            >
              <h3 className="font-display font-semibold text-xl mb-5 ">
                Segurança com padrão científico
              </h3>

              <div className="space-y-4">
                {[
                  "Tecnologia de ponta em biodescontaminação",
                  "Equipe altamente qualificada e treinada",
                  "Certificações e protocolos rigorosos",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-sasbio-green-health to-sasbio-green-bright flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/95">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ✅ CENTER SEAL (fica no centro da imagem) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* glow atrás */}
                <motion.div
                  className="absolute inset-0 -z-10 w-[360px] h-[360px] "
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* ✅ Selo com efeito "vai pra frente do gradient" no hover */}
                <motion.div
                  onClick={handleSealClick}
                  className="group relative cursor-pointer"
                  whileHover={{
                    scale: 1.06,
                    y: -6,
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 220, damping: 16 }}
                  style={{
                    // truque: cria contexto 3D para o selo "saltar"
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Card do selo */}
                  <motion.div
                    className="w-84 h-84 flex items-center justify-center"
                    // ✅ empurra o selo "pra frente" (como se passasse por cima do overlay)
                    whileHover={{
                      zIndex: 30,
                    }}
                  >
                    <img
                      src="/images/certificado/certificado-sasbio.png"
                      alt="Certificado SASBIO"
                      className="max-w-full max-h-full rounded-xl"
                      style={{
                        transform: "translateZ(20px)", // profundidade
                      }}
                    />

                    <motion.div
                      className="absolute bottom-4 text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ y: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      style={{ transform: "translateZ(30px)" }}
                    >
                      Passe o mouse • Clique para mais
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Message */}
                <AnimatePresence>
                  {showCertificateMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-72"
                    >
                      <div className="bg-gradient-to-r from-sasbio-green-health to-sasbio-green-bright text-white px-6 py-4 rounded-2xl shadow-2xl text-center">
                        <span className="block font-display font-semibold">
                          ✨ Ganhe seu certificado de Ambiente Seguro! ✨
                        </span>
                        <span className="text-sm text-white/90">
                          Entre em contato conosco
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* RIGHT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
               className="text-white -mt-6 lg:-mt-56 ml-6 lg:mr-20"
            >
              <h3 className="font-display font-semibold text-xl mb-5">
                Confiança e credibilidade
              </h3>

              <div className="space-y-4">
                {[
                  "Atendimento personalizado e humanizado",
                  "Resultados comprovados cientificamente",
                  "Procedimentos padronizados e auditáveis",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-sasbio-blue-light to-sasbio-blue-tech flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/95">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
