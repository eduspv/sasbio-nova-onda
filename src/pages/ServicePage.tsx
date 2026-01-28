import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Sparkles, HeartPulse, Droplets, Brain } from "lucide-react";

const servicesData = {
  biodescontaminacao: {
    icon: Sparkles,
    title: "Biodescontaminação",
    subtitle: "Tecnologia de ponta para ambientes 100% seguros",
    description: "A biodescontaminação é o processo mais avançado para eliminação de patógenos em ambientes hospitalares. Utilizamos peróxido de hidrogênio vaporizado (H2O2) que atinge todos os cantos do ambiente.",
    features: [
      "Eliminação de 99,9999% dos patógenos",
      "Processo sem resíduos tóxicos",
      "Validação com indicadores biológicos",
      "Certificação após cada serviço",
      "Compatível com equipamentos médicos",
      "Tempo de aplicação otimizado",
    ],
    gradient: "from-sasbio-blue-tech to-sasbio-blue-light",
  },
  sasmuv: {
    icon: HeartPulse,
    title: "SASMUV",
    subtitle: "Saúde em movimento com tecnologia e humanização",
    description: "O SASMUV é nossa unidade móvel de atendimento à saúde, equipada com tecnologia de ponta para levar serviços médicos de qualidade a diferentes localidades.",
    features: [
      "Atendimento médico especializado",
      "Exames e diagnósticos no local",
      "Equipe multidisciplinar",
      "Estrutura completa e moderna",
      "Atendimento humanizado",
      "Cobertura regional ampla",
    ],
    gradient: "from-sasbio-blue-light to-sasbio-green-health",
  },
  "banho-no-leito": {
    icon: Droplets,
    title: "Banho no Leito",
    subtitle: "Cuidado especializado com dignidade e conforto",
    description: "Serviço especializado de higiene para pacientes acamados, realizado com técnicas apropriadas que garantem conforto, segurança e dignidade ao paciente.",
    features: [
      "Equipe treinada e certificada",
      "Produtos dermatologicamente testados",
      "Protocolos de segurança rigorosos",
      "Conforto térmico garantido",
      "Prevenção de lesões de pele",
      "Documentação completa",
    ],
    gradient: "from-sasbio-green-health to-sasbio-green-bright",
  },
  "saude-mental": {
    icon: Brain,
    title: "Saúde Mental",
    subtitle: "Tratamento integral com abordagem acolhedora",
    description: "Programa completo de saúde mental com acompanhamento psicológico e psiquiátrico, utilizando abordagens modernas e baseadas em evidências científicas.",
    features: [
      "Psicoterapia individual e em grupo",
      "Acompanhamento psiquiátrico",
      "Programas de bem-estar corporativo",
      "Atendimento presencial e online",
      "Equipe multidisciplinar",
      "Sigilo e ética profissional",
    ],
    gradient: "from-sasbio-green-bright to-sasbio-blue-tech",
  },
};

type ServiceKey = keyof typeof servicesData;

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData[slug as ServiceKey];

  if (!service) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold mb-4">Serviço não encontrado</h1>
            <Link to="/">
              <Button>Voltar ao início</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const Icon = service.icon;

  return (
    <Layout>
      {/* Hero */}
      <section className={`relative min-h-[60vh] flex items-center bg-gradient-to-br ${service.gradient}`}>
        <div className="absolute inset-0 scientific-grid opacity-10" />
        <div className="absolute inset-0 molecular-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Voltar ao início
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Icon className="w-10 h-10 text-white" />
              </motion.div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {service.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Sobre o Serviço
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Images Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`aspect-square rounded-2xl bg-gradient-to-br ${service.gradient} opacity-20 cursor-pointer`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Características
              </h2>
              
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Link to="/contato">
                  <Button 
                    size="lg"
                    className={`pill-button glow-button bg-gradient-to-r ${service.gradient} text-white border-0`}
                  >
                    Solicitar Orçamento
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePage;
