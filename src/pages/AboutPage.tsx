import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-sasbio-blue-tech via-sasbio-blue-light to-sasbio-green-health">
        <div className="absolute inset-0 scientific-grid opacity-10" />
        <div className="absolute inset-0 molecular-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              Quem Somos
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              Conheça a SASBIO
            </h1>
            <p className="text-xl text-white/90">
              Inovação, ciência e compromisso com a saúde
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Nossa História
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  A SASBIO nasceu da visão de transformar a biossegurança hospitalar no Brasil. 
                  Fundada por profissionais com vasta experiência na área de saúde, nossa empresa 
                  se consolidou como referência em soluções inovadoras para ambientes hospitalares.
                </p>
                <p>
                  Desde o início, investimos em tecnologia de ponta e capacitação contínua de nossa 
                  equipe, garantindo que cada serviço prestado atenda aos mais rigorosos padrões 
                  de qualidade e segurança.
                </p>
                <p>
                  Nossa missão é promover ambientes mais seguros e saudáveis, contribuindo para 
                  a redução de infecções hospitalares e a melhoria da qualidade de vida de 
                  pacientes e profissionais de saúde.
                </p>
                <p>
                  Com presença em diversos estados brasileiros, a SASBIO continua expandindo 
                  sua atuação, levando inovação e excelência para cada vez mais instituições 
                  de saúde.
                </p>
              </div>
            </motion.div>

            {/* Download Section */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-card rounded-3xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sasbio-blue-tech to-sasbio-blue-light flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Release Institucional
                </h3>
                <p className="text-muted-foreground mb-6">
                  Baixe nosso release institucional completo com todas as informações 
                  sobre a SASBIO, nossos serviços e diferenciais.
                </p>
                
                <Button 
                  size="lg"
                  className="pill-button glow-button bg-gradient-to-r from-sasbio-green-health to-sasbio-green-bright text-white border-0"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Baixar PDF
                </Button>
              </div>

              {/* Values */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { title: "Missão", text: "Promover ambientes seguros através da inovação" },
                  { title: "Visão", text: "Ser referência nacional em biossegurança" },
                  { title: "Valores", text: "Ética, qualidade, inovação e humanização" },
                  { title: "Propósito", text: "Transformar a saúde através da ciência" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-muted/50 rounded-xl"
                  >
                    <h4 className="font-display font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
