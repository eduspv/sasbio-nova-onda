import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Shield, Droplets, Brain } from "lucide-react";

const services = [
  {
    id: "biodescontaminacao",
    icon: Sparkles,
    title: "Biodescontaminação",
    description:
      "Eliminação total de patógenos com tecnologia de peróxido de hidrogênio vaporizado.",
    href: "/servicos/biodescontaminacao",
    gradient: "from-sasbio-blue-tech to-sasbio-blue-light",
    iconGradient: "from-sasbio-blue-tech to-sasbio-blue-light",
    image: "/images/services/biodescontaminacao.jpeg",
  },
  {
    id: "sasmuv",
    icon: Shield,
    title: "SASMUV",
    description: "Solução móvel e acessível para controle de vetores, pragas e arbovíroses.",
    href: "/servicos/sasmuv",
    gradient: "from-sasbio-blue-light to-sasbio-green-health",
    iconGradient: "from-sasbio-green-health to-sasbio-green-bright",
    image: "/images/services/sasmuv.png",
  },
  {
    id: "banho-leito",
    icon: Droplets,
    title: "Banho no Leito",
    description: "Cuidado especializado para pacientes acamados com dignidade e conforto.",
    href: "/servicos/banho-no-leito",
    gradient: "from-sasbio-green-health to-sasbio-green-bright",
    iconGradient: "from-sasbio-blue-light to-sasbio-green-health",
    image: "/images/services/banho-no-leito.jpeg",
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
            O que e como <span className="gradient-text">Fazemos</span>
          </h2>
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
                  className="group relative h-full bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden"
                >
                  {/* Image Top (SEM GRADIENT EM CIMA) */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105
                        ${service.id === "biodescontaminacao" ? "object-[50%_30%]" : "object-center"}
                      `}
                    />

                  </div>

                  {/* Content */}
                  <div className="relative p-8 pt-14">
                    {/* Icon floating (COM CORES DIFERENTES POR SERVIÇO) */}
                    <motion.div
                      className={`absolute -top-8 left-8 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.iconGradient} flex items-center justify-center shadow-xl`}
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Title: no hover vira GRADIENT no texto */}
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
          ))}
        </div>
      </div>
    </section>
  );
}
