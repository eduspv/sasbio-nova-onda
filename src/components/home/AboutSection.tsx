import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 scientific-grid opacity-30" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Logo / Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative circles */}
              <motion.div 
                className="absolute -top-8 -left-8 w-64 h-64 rounded-full bg-gradient-to-br from-sasbio-blue-tech/20 to-sasbio-green-health/20 blur-2xl"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 20, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-gradient-to-br from-sasbio-green-health/20 to-sasbio-blue-light/20 blur-2xl"
                animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
                transition={{ duration: 15, repeat: Infinity }}
              />
              
              {/* Main Logo Card */}
              <motion.div 
                className="relative glass-card rounded-3xl p-12 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-sasbio-blue-tech to-sasbio-green-health flex items-center justify-center shadow-2xl">
                  <span className="text-white font-display font-bold text-6xl">SB</span>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div 
                className="absolute top-4 right-4 w-20 h-20 rounded-2xl bg-sasbio-green-health/10 backdrop-blur"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-4 left-4 w-16 h-16 rounded-xl bg-sasbio-blue-tech/10 backdrop-blur"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-sasbio-blue-tech/10 text-sasbio-blue-tech text-sm font-medium mb-6"
            >
              Quem Somos
            </motion.span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Inovação em{" "}
              <span className="gradient-text">Biossegurança</span>{" "}
              e Saúde
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A SASBIO é pioneira em soluções de biossegurança hospitalar e saúde ocupacional. 
              Com tecnologia de ponta e uma equipe altamente qualificada, oferecemos serviços 
              que garantem ambientes seguros e saudáveis para pacientes e profissionais.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nossa missão é transformar a forma como hospitais e empresas lidam com a 
              biossegurança, trazendo inovação, eficiência e resultados comprovados.
            </p>

            <Link to="/sobre">
              <Button 
                size="lg"
                className="group pill-button glow-button bg-gradient-to-r from-sasbio-blue-tech to-sasbio-blue-light text-white border-0"
              >
                Conheça Melhor a Empresa
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
