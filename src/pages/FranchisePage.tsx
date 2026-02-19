import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle,
  Wallet,
  Building2,
  LineChart,
} from "lucide-react";

export default function FranchisePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
         {/* Imagem de fundo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/franquias/hero_franqueado_page.jpg')",
          }}
        />
        <div className="container mx-auto px-4 relative pt-24">

        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 space-y-24">

          {/* INTRODUÇÃO */}
<motion.section
  initial={{ opacity: 0, y: 18 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="max-w-6xl mx-auto"
>
  <div className="grid lg:grid-cols-2 gap-12 items-center">
    {/* TEXTO – ESQUERDA */}
    <div>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
        <span className="gradient-text">Sua chance </span>de ser um{" "}
        <span className="gradient-text">Franqueado</span>
      </h2>

      <p className="text-muted-foreground text-lg leading-relaxed">
        Alinhada com a filosofia de promover segurança em ambientes de acesso
        comum e coletivo, utilizando metodologia inovadora dentro de um
        ecossistema, cujo objetivo é o combate e eliminação de microrganismos
        prejudiciais à saúde humana, seja no diagnóstico e na monitorização de
        ambientes, da profilaxia como medida preventiva utilizando soluções de
        longa duração, treinamento e capacitação de equipes, certificação de
        acordo com normas técnicas brasileiras e internacionais.
      </p>

      <p className="text-muted-foreground text-lg leading-relaxed mt-4">
        A SASBIO estruturou um projeto de <strong>FRANQUIA</strong> que conta
        com ferramentas de apoio e suporte com tecnologias consideradas as
        mais modernas do mercado, tendo como um de seus principais pilares
        a inovação e tecnologia de ponta.
      </p>
    </div>

    {/* IMAGEM – DIREITA */}
    <div className="w-full">
      <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-sm bg-background/30">
        <img
          src="/images/franquias/sacola-sasbio.png"
          alt="Franquia SASBIO"
          className="w-full h-full object-cover"
          draggable={false}
        />

        {/* Overlay sutil no padrão SASBIO */}
        <div className="absolute inset-0 bg-gradient-to-tr from-sasbio-green-health/25 via-sasbio-blue-tech/15 to-transparent" />
      </div>
    </div>
  </div>
</motion.section>


          {/* CARACTERÍSTICAS DA OPERAÇÃO */}
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-6xl mx-auto"
          >
            <h3 className="text-3xl font-display font-bold mb-10">
              Características da <span className="gradient-text">Operação</span>
            </h3>

            <div className="grid lg:grid-cols-2 gap-10">
              <p className="text-muted-foreground text-lg leading-relaxed">
                A SASBIO desenvolveu um sistema de controle microbiológico de
                ambientes fechados e abertos, com ou sem climatização, com
                metodologia inovadora, que tem como objetivo promover, como
                medida preventiva, a limpeza de superfícies, desde o diagnóstico
                precoce com monitorização de locais de acesso comum e coletivo,
                até a aplicação de produtos químicos classificados como Tipo
                Terminal pela ANVISA.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                A metodologia empregada impede a proliferação de vírus, bactérias,
                fungos, ácaros e outros patógenos prejudiciais à saúde humana,
                incluindo o SARS-CoV-2 e suas variantes, além de agentes causadores
                de doenças respiratórias, meningite, tuberculose e pneumonia.
              </p>
            </div>
          </motion.section>

          {/* GARANTIA E CERTIFICAÇÃO */}
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "Certificação Técnica",
                  text:
                    "Atende às normas brasileiras e internacionais, com classificação Tipo Terminal pela ANVISA.",
                },
                {
                  icon: LineChart,
                  title: "Monitoramento contínuo",
                  text:
                    "Monitorização e garantia de eficácia pelo período de 90 dias.",
                },
                {
                  icon: CheckCircle,
                  title: "Validação científica",
                  text:
                    "Laudos de laboratórios independentes e acompanhamento de institutos tecnológicos.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="rounded-3xl border border-border bg-card p-6"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sasbio-green-health/15 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-sasbio-green-health" />
                    </div>
                    <div className="font-display font-bold text-foreground">
                      {item.title}
                    </div>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* INVESTIMENTO */}
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-3xl font-display font-bold mb-6">
              <span className="gradient-text">Investimento</span>
            </h3>

            <div className="rounded-3xl border border-border bg-card p-8">
              <p className="text-muted-foreground text-lg leading-relaxed">
                O investimento inicial gira em torno de
                <strong> R$ 150.000,00</strong>, incluindo taxa de franquia,
                maquinário, capital de giro, despesas pré-operacionais,
                mobiliário, equipamentos de informática, sistema de comunicação
                e telefonia, estoque inicial, capacitação da equipe e suporte
                completo de marketing e vendas.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                Recomenda-se que o franqueado disponha de reserva adicional de
                capital para cobertura de custos fixos nos primeiros meses de
                operação. As taxas mensais são calculadas com base no faturamento
                bruto, considerando mercado e região de atuação.
              </p>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-3xl font-display font-bold mb-4">
              Pronto para investir em um modelo <span className="gradient-text">inovador</span>?
            </h3>

            <p className="text-muted-foreground text-lg mb-8">
              Fale com nossa equipe e receba o plano completo da franquia SASBIO.
            </p>

            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-sasbio-green-health text-white font-semibold hover:opacity-90 transition"
            >
              <Building2 className="w-5 h-5" />
              Quero ser franqueado
            </Link>
          </motion.section>

        </div>
      </section>
    </Layout>
  );
}
