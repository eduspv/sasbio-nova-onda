import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, HeartPulse, Droplets, Brain } from "lucide-react";

const services = [
  {
    id: "biodescontaminacao",
    icon: Sparkles,
    title: "Biodescontaminação",
    description: "Eliminação total de patógenos com tecnologia de peróxido de hidrogênio vaporizado.",
    href: "/servicos/biodescontaminacao",
    gradient: "from-sasbio-blue-tech to-sasbio-blue-light",
  },
  {
    id: "sasmuv",
    icon: HeartPulse,
    title: "SASMUV",
    description: "Unidade móvel de saúde com atendimento humanizado e tecnológico.",
    href: "/servicos/sasmuv",
    gradient: "from-sasbio-blue-light to-sasbio-green-health",
  },
  {
    id: "banho-leito",
    icon: Droplets,
    title: "Banho no Leito",
    description: "Cuidado especializado para pacientes acamados com dignidade e conforto.",
    href: "/servicos/banho-no-leito",
    gradient: "from-sasbio-green-health to-sasbio-green-bright",
  },
  {
    id: "saude-mental",
    icon: Brain,
    title: "Saúde Mental",
    description: "Tratamento e acompanhamento psicológico com abordagem moderna e acolhedora.",
    href: "/servicos/saude-mental",
    gradient: "from-sasbio-green-bright to-sasbio-blue-tech",
  },
];

export function ServicesSection() {
  return (
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
            O que <span className="gradient-text">Fazemos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluções integradas em biossegurança e saúde, desenvolvidas com ciência e tecnologia de ponta.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={service.href}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative h-full bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow overflow-hidden"
                >
                  {/* Gradient Border Effect */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  
                  {/* Glow Effect */}
                  <motion.div 
                    className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-display font-semibold text-xl text-foreground mb-3 group-hover:text-sasbio-blue-tech transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <motion.div 
                    className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <svg className="w-4 h-4 text-sasbio-blue-tech" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
