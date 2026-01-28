import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, ArrowRight, TrendingUp, Globe } from "lucide-react";

export function FranchiseSection() {
  return (
    <section id="franquias" className="py-24 relative overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sasbio-blue-tech via-sasbio-blue-light to-sasbio-green-health">
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            background: [
              "linear-gradient(135deg, rgba(1, 125, 174, 0.9) 0%, rgba(72, 168, 170, 0.8) 50%, rgba(66, 182, 82, 0.9) 100%)",
              "linear-gradient(135deg, rgba(66, 182, 82, 0.9) 0%, rgba(1, 125, 174, 0.8) 50%, rgba(72, 168, 170, 0.9) 100%)",
              "linear-gradient(135deg, rgba(1, 125, 174, 0.9) 0%, rgba(72, 168, 170, 0.8) 50%, rgba(66, 182, 82, 0.9) 100%)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      
      {/* Pattern Overlays */}
      <div className="absolute inset-0 scientific-grid opacity-10" />
      <div className="absolute inset-0 molecular-pattern opacity-20" />
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/10 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-white/10 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur text-sm font-medium mb-6"
            >
              <Rocket className="w-4 h-4" />
              Projeções de Futuro
            </motion.span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
              Seja um{" "}
              <span className="text-sasbio-green-bright">Franqueado</span>{" "}
              SASBIO
            </h2>
            
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Faça parte da expansão da SASBIO e empreenda no segmento de biossegurança 
              que mais cresce no Brasil. Um mercado em expansão com oportunidades únicas.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                { icon: TrendingUp, text: "Mercado em crescimento exponencial" },
                { icon: Globe, text: "Suporte completo em todas as regiões" },
                { icon: Rocket, text: "Modelo de negócio comprovado" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-white/90">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <Link to="/contato">
              <Button 
                size="lg"
                className="group pill-button bg-white text-sasbio-blue-tech hover:bg-white/90 border-0 shadow-xl"
              >
                Torne-se um Franqueado
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div 
              className="aspect-square max-w-lg mx-auto rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-2xl"
              whileHover={{ scale: 1.02 }}
            >
              {/* Futuristic Visual */}
              <div className="h-full rounded-2xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                >
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      style={{ 
                        top: "50%", 
                        transform: `rotate(${i * 22.5}deg)`,
                        transformOrigin: "center"
                      }}
                    />
                  ))}
                </motion.div>
                
                <div className="relative z-10 text-center">
                  <motion.div 
                    className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Globe className="w-12 h-12 text-white" />
                  </motion.div>
                  <p className="text-white font-display font-semibold text-xl">Expansão Nacional</p>
                  <p className="text-white/70 text-sm">+20 estados até 2025</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
