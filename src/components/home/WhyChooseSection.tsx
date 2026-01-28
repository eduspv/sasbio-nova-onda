import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Award, CheckCircle } from "lucide-react";

export function WhyChooseSection() {
  const [showCertificateMessage, setShowCertificateMessage] = useState(false);

  const handleSealClick = () => {
    setShowCertificateMessage(true);
    setTimeout(() => setShowCertificateMessage(false), 3000);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 scientific-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-sasbio-blue-tech/10 text-sasbio-blue-tech text-sm font-medium mb-6">
              Diferenciais
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Por que escolher a{" "}
              <span className="gradient-text">SASBIO</span>?
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Com anos de experiência e certificações reconhecidas, a SASBIO oferece 
              soluções completas em biossegurança com garantia de resultados.
            </p>

            <div className="space-y-4">
              {[
                "Tecnologia de ponta em biodescontaminação",
                "Equipe altamente qualificada e treinada",
                "Certificações e protocolos rigorosos",
                "Atendimento personalizado e humanizado",
                "Resultados comprovados cientificamente",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-sasbio-green-health to-sasbio-green-bright flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Seal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Background Glow */}
              <motion.div 
                className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-br from-sasbio-blue-tech/20 to-sasbio-green-health/20 blur-3xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Seal Card */}
              <motion.div
                onClick={handleSealClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative cursor-pointer group"
              >
                <motion.div 
                  className="w-72 h-72 rounded-full glass-card border-4 border-sasbio-green-health/30 flex flex-col items-center justify-center p-8 shadow-2xl"
                  animate={showCertificateMessage ? { 
                    boxShadow: ["0 0 0 0 rgba(46, 180, 85, 0)", "0 0 60px 20px rgba(46, 180, 85, 0.4)", "0 0 0 0 rgba(46, 180, 85, 0)"]
                  } : {}}
                  transition={{ duration: 1 }}
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sasbio-green-health to-sasbio-green-bright flex items-center justify-center mb-4 shadow-lg">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <Award className="w-8 h-8 text-sasbio-blue-tech mb-2" />
                  <h3 className="font-display font-bold text-2xl text-foreground text-center mb-1">
                    Ambiente Seguro
                  </h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Certificação SASBIO
                  </p>
                  
                  {/* Hover Indicator */}
                  <motion.div 
                    className="absolute bottom-6 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Clique para mais
                  </motion.div>
                </motion.div>

                {/* Rotating Ring */}
                <motion.div 
                  className="absolute inset-0 w-72 h-72 rounded-full border-2 border-dashed border-sasbio-blue-tech/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              {/* Certificate Message */}
              <AnimatePresence>
                {showCertificateMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-64"
                  >
                    <div className="bg-gradient-to-r from-sasbio-green-health to-sasbio-green-bright text-white px-6 py-4 rounded-2xl shadow-2xl text-center">
                      <motion.span 
                        className="block font-display font-semibold"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 0.5 }}
                      >
                        ✨ Ganhe seu Certificado!
                      </motion.span>
                      <span className="text-sm text-white/90">Entre em contato conosco</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
