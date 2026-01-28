import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, ShieldCheck, Award, Stethoscope, HeartPulse, FileCheck } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Sem Resíduos",
    description: "Processo limpo e sustentável, sem geração de resíduos tóxicos ou contaminantes após a aplicação.",
    gradient: "from-sasbio-green-health to-sasbio-green-bright",
  },
  {
    icon: ShieldCheck,
    title: "Proteção Total",
    description: "Eliminação de até 99,9999% dos patógenos, incluindo vírus, bactérias e fungos resistentes.",
    gradient: "from-sasbio-blue-tech to-sasbio-blue-light",
  },
  {
    icon: Award,
    title: "Garantia de Qualidade",
    description: "Certificação e laudos técnicos comprovando a eficácia do serviço realizado.",
    gradient: "from-sasbio-blue-light to-sasbio-green-health",
  },
  {
    icon: Stethoscope,
    title: "Prevenção",
    description: "Redução significativa de infecções hospitalares e contaminações cruzadas.",
    gradient: "from-sasbio-green-bright to-sasbio-blue-tech",
  },
  {
    icon: HeartPulse,
    title: "Mais Saúde",
    description: "Ambientes mais saudáveis para pacientes, colaboradores e visitantes.",
    gradient: "from-sasbio-blue-tech to-sasbio-green-health",
  },
  {
    icon: FileCheck,
    title: "ANVISA",
    description: "Produtos e processos em conformidade com as normas da ANVISA e órgãos reguladores.",
    gradient: "from-sasbio-green-health to-sasbio-blue-light",
  },
];

export function BenefitsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sasbio-blue-tech via-sasbio-blue-light to-sasbio-green-health opacity-5" />
      <div className="absolute inset-0 molecular-pattern opacity-20" />
      
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
            Vantagens
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Benefícios <span className="gradient-text">Exclusivos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça as vantagens que fazem da SASBIO referência em biossegurança.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                whileHover={{ y: -6 }}
                className="relative h-full bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                {/* Hover Gradient Background */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-5`}
                    />
                  )}
                </AnimatePresence>

                {/* Icon */}
                <motion.div 
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-5 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <benefit.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                  {benefit.title}
                </h3>

                {/* Expandable Description */}
                <AnimatePresence>
                  <motion.p 
                    className="text-muted-foreground text-sm leading-relaxed"
                    initial={{ height: "auto" }}
                    animate={{ 
                      height: hoveredIndex === index ? "auto" : "auto"
                    }}
                  >
                    {benefit.description}
                  </motion.p>
                </AnimatePresence>

                {/* Animated Border */}
                <motion.div 
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${benefit.gradient}`}
                  initial={{ width: "0%" }}
                  animate={{ width: hoveredIndex === index ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
