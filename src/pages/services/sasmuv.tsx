import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { HotspotsImage } from "@/components/HotspotsImage";
import {
  ArrowLeft,
  ShieldCheck,
  Bike,
  Map,
  Fuel,
  Users,
  Clock,
  CheckCircle,
  Droplets,
  Orbit,
  Rotate3d,
  Shield,
  ArrowBigDownDash,
  BatteryCharging,
} from "lucide-react";

const advantages = [
  { icon: Map, text: "Trabalha em áreas de difícil acesso" },
  { icon: Bike, text: "Opera em terrenos irregulares" },
  { icon: ShieldCheck, text: "Atinge áreas críticas com precisão" },
  { icon: Clock, text: "Cobertura de áreas em menos tempo" },
  { icon: Fuel, text: "Baixo consumo de combustível" },
  { icon: ArrowBigDownDash, text: "Baixo custo de aquisição e manutenção" },
  { icon: Users, text: "Utiliza apenas 1 operador" },
  { icon: CheckCircle, text: "Capacitação operacional simples" },
  { icon: BatteryCharging, text: "Recarga simples e rápida" },
  { icon: Orbit, text: "Baixo custo de operação e manutenção;" },
  { icon: Rotate3d, text: "Alta autonomia de trabalho" },
];

export default function SASMUVPage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/servicespages/sasmuv/sasmuv-hero2.png')",
          }}
        />

        {/* ✅ mais verde no hero, mantendo padrão */}
        <div className="absolute inset-0 bg-gradient-to-br from-sasbio-green-health/60 via-sasbio-blue-tech/5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-sasbio-green-bright/45 via-transparent to-transparent" />
        <div className="absolute inset-0 scientific-grid opacity-10" />
        <div className="absolute inset-0 molecular-pattern opacity-22" />

        <div className="container mx-auto px-4 relative pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar ao início
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                className="w-20 h-20 rounded-2xl  flex items-center justify-center"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
              <Shield className="w-10 h-10 text-white"></Shield>
              </motion.div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              SASMUV
            </h1>

            <p className="text-xl text-white/90">
              Solução móvel e acessível para controle de vetores, pragas e arbovíroses em áreas de dificil acesso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sasbio-green-health/10 via-sasbio-blue-light/10 to-transparent" />
        <div className="absolute inset-0 molecular-pattern opacity-15" />

        <div className="container mx-auto px-4 relative space-y-24">

          {/* CONTEXTO */}
          <motion.section
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                      className="max-w-6xl mx-auto mb-20"
                    >
                      <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                          <h2 className="text-3xl md:text-4xl font-display font-bold">
                           O que é o <span className="gradient-text">SASMUV</span>
                            
                          </h2>
          
                          <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                            A proliferação da dengue e outras arboviroses impacta diretamente a
                            saúde da população, pressiona os sistemas de saúde, gera perdas
                            econômicas, reduz a produtividade e afeta o bem-estar coletivo.
                            Diante desse cenário, o controle eficaz do mosquito transmissor
                            torna-se uma medida essencial.
                          </p>
          
                          <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                            Atualmente, em muitos hospitais, o serviço é executado por dois profissionais e exige
                            tempo de preparo — o que pode gerar impacto financeiro negativo e sobrecarga da equipe.
                          </p>
                        </div>
          
                        <div className="w-full">
                          <div className="relative w-full aspect-[10/10] rounded-2xl overflow-hidden border border-border shadow-sm bg-background/30">
                            <img
                              src="/images/servicespages/sasmuv/sasmuv.png"
                              alt="Kit Banho no Leito SASBIO"
                              className="w-full h-full object-cover"
                              draggable={false}
                            />
                            {/* ✅ overlay mais verde */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-sasbio-green-health/25 via-sasbio-blue-tech/15 to-transparent" />
                          </div>
                        </div>
                      </div>
                    </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Limitações do <span className="gradient-text">fumacê</span> tradicional
            </h2>

            <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
              Embora amplamente conhecido, o fumacê tradicional apresenta
                restrições importantes. Normalmente operado por veículos de
                grande porte e vinculado a rotas públicas pré-definidas, muitos
                locais de difícil acesso acabam não sendo atendidos, deixando
                parte da população desassistida.
            </p>
          </motion.section>

          {/* SOLUÇÃO */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto"
          >
            <img
              src="/images/servicespages/sasmuv/sasmuv-real.png"
              alt="SASMUV SASBIO"
              className="rounded-3xl border border-border"
            />

            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                A solução SASBIO: <span className="gradient-text">SASMUV</span>
              </h3>

              <p className="text-muted-foreground text-lg leading-relaxed">
                A SASMUV utiliza uma motocicleta adaptada com sistema de
                pulverização em ultra baixo volume, permitindo acesso a áreas
                estreitas, terrenos irregulares e regiões críticas. Com isso,
                amplia-se a cobertura, reduz-se o tempo de resposta e beneficia-se
                uma parcela maior da população.
              </p>
            </div>
          </motion.section>

          {/* COMO FUNCIONA */}
<motion.section
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="max-w-6xl mx-auto"
>
  <h3 className="text-3xl font-display font-bold text-center mb-5">
    Como <span className="gradient-text">funciona</span>
    <p className="text-muted-foreground text-lg leading-relaxed">
      Passe o mouse por cima dos icones "+" para descobrir.
    </p>
  </h3>

  <HotspotsImage
    src="/images/servicespages/sasmuv/sasmuv-diagrama.png"
    alt="Diagrama técnico SASMUV"
    className="mx-auto"
    hotspots={[
      {
        id: "tanque",
        x: 30,
        y: 28,
        title: "Tanque de armazenamento",
        description: "Tanque com alta capacidade para operação contínua e maior autonomia.",
        side: "left",
      },
      {
        id: "central",
        x: 42,
        y: 17,
        title: "Central eletrônica acoplada",
        description: "Controle eletrônico com gps integrado ao sistema, garantindo precisão e estabilidade.",
        side: "right",
      },
      {
        id: "painel",
        x: 58,
        y: 34,
        title: "Painel de controle",
        description: "Painel de múltiplas vazões para ajustar a aplicação conforme o cenário.",
        side: "right",
      },
      {
        id: "motor",
        x: 52,
        y: 62,
        title: "Motor como gerador de energia",
        description: "Utiliza o motor da moto como gerador de energia do sistema, sem precisar de um motor secundário.",
        side: "right",
      },
      {
        id: "aspersao",
        x: 36,
        y: 64,
        title: "Aspersão pelo escapamento",
        description: "Aspersão é feita através do escapamento, garantindo maior alcance e penetração do produto, com menor impacto ambiental.",
        side: "left",
      },
    ]}
  />
</motion.section>


          {/* VANTAGENS */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h3 className="text-3xl font-display font-bold text-center mb-12">
              Vantagens <span className="gradient-text">operacionais</span>
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="relative rounded-2xl border border-border bg-card p-6 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-sasbio-green-health/10 to-transparent" />
                    <div className="relative flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-sasbio-green-health/15 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-sasbio-green-health" />
                      </div>
                      <p className="text-foreground font-medium">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h3 className="text-3xl font-display font-bold mb-4">
              Quer implementar a <span className="gradient-text">SASMUV</span>?
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Fale com nossos especialistas e leve uma solução moderna, acessível
              e eficiente para o controle de vetores.
            </p>

            <Link
              to="/contato"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-sasbio-green-health text-white font-semibold hover:opacity-90 transition"
            >
              Fale Conosco
            </Link>
          </motion.section>
        </div>
      </section>
    </Layout>
  );
}
