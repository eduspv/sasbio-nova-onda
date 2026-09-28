// src/pages/services/banho-no-leito.tsx
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import manualPDF from "@/images/servicespages/banho-no-leito/folder/Manual-banho-no-leito.pdf";
import {
  ArrowLeft,
  Droplets,
  Download,
  Clock,
  ShieldCheck,
  HeartHandshake,
  Wallet,
  HeartPulse,
  BedDouble,
  Activity,
  Shield,
} from "lucide-react";

const service = {
  icon: Droplets,
  title: "Banho no Leito",
  subtitle: "Conforto ao paciente. Eficiência para a equipe. Economia para o hospital.",
  eyebrow: "Soluções hospitalares SASBIO",
  description:
    "O banho no leito é um procedimento de higiene realizado em pacientes acamados ou com mobilidade reduzida, em que a higienização corporal é feita no próprio leito. Esse cuidado é essencial para manter higiene, conforto e dignidade do paciente.",
};

const highlights = [
  { icon: Clock, title: "8 min", description: "Tempo médio necessário para o procedimento." },
  { icon: Droplets, title: "1,2L", description: "Consumo médio de água no banho no leito." },
  { icon: Wallet, title: "-70%", description: "Redução potencial de custos operacionais." }, // use apenas se for claim validado
];

const benefits = [
  {
    icon: HeartHandshake,
    title: "Humanização e bem-estar",
    description: "Processo humanizado que proporciona conforto e melhora a experiência do paciente.",
  },
  {
    icon: ShieldCheck,
    title: "Menos contaminação cruzada",
    description:
      "Redução de microrganismos ativos e menor risco de infecções associadas ao cuidado diário.",
  },
  {
    icon: Wallet,
    title: "Eficiência e economia",
    description: "Menos tempo por procedimento e menor impacto financeiro para instituições hospitalares.",
  },
];

type HowItem = {
  key: string;
  title: string;
  description: string;
  image: string;
  icon: any;
};

export default function BanhoNoLeitoPage() {
  const Icon = service.icon;

  // Como funciona (painel + botões)
  const howItems: HowItem[] = useMemo(
    () => [
      {
        key: "bem-estar",
        title: "BEM ESTAR",
        description:
          "Reproduzir no banho no leito as sensações semelhantes às promovidas pelo banho no chuveiro.",
        image: "/images/servicespages/banho-no-leito/steps/bem-estar.jpeg",
        icon: HeartPulse,
      },
      {
        key: "conforto",
        title: "CONFORTO",
        description:
          "Proporcionar aos pacientes um maior conforto antes, durante e após o processo do banho.",
        image: "/images/servicespages/banho-no-leito/steps/conforto.jpeg",
        icon: BedDouble,
      },
      {
        key: "diminuicao-doencas",
        title: "DIMINUIÇÃO DE DOENÇAS",
        description:
          "Reduzir o esforço repetitivo ocorrido nos banhos de leitos, diminuindo a chance de desenvolver doenças ocupacionais como lombalgia e doenças osteoarticulares.",
        image: "/images/servicespages/banho-no-leito/steps/diminuicao-doencas.jpeg",
        icon: Activity,
      },
      {
        key: "reducao-micro",
        title: "REDUÇÃO DE MICROORGANISMOS",
        description:
          "Reduzir o trânsito de microorganismos patogênicos de uma região corporal do paciente para outra.",
        image: "/images/servicespages/banho-no-leito/steps/reducao-micro.jpeg",
        icon: Shield,
      },
    ],
    []
  );

  const [activeHow, setActiveHow] = useState(0);
  const currentHow = howItems[activeHow];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/servicespages/banho-no-leito/banho-no-leito-hero.png')",
          }}
        />
        {/* ✅ mais verde no hero, mantendo padrão */}
        <div className="absolute inset-0 bg-gradient-to-br from-sasbio-green-health/60 via-sasbio-blue-tech/5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-sasbio-green-bright/45 via-transparent to-transparent" />
        <div className="absolute inset-0 scientific-grid opacity-10" />
        <div className="absolute inset-0 molecular-pattern opacity-22" />

        {/* ✅ blobs verdes suaves */}
        <div className="pointer-events-none absolute -top-24 -left-28 h-80 w-80 rounded-full bg-sasbio-green-health/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-sasbio-green-bright/16 blur-3xl" />

        <div className="container mx-auto px-4 relative pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar ao início
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <motion.div
                className="w-20 h-20 rounded-2xl backdrop-blur flex items-center justify-center"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Icon className="w-10 h-10 text-white" />
              </motion.div>
            </div>

            <p className="text-white/80 font-medium mb-3">{service.eyebrow}</p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              {service.title}
            </h1>

            <p className="text-xl text-white/90 mb-6">{service.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* ✅ background global mais “verde” no padrão do BenefitsSection */}
        <div className="absolute inset-0 bg-gradient-to-br from-sasbio-green-health via-sasbio-blue-light to-sasbio-blue-tech opacity-[0.06]" />
        <div className="absolute inset-0 molecular-pattern opacity-18" />
        <div className="absolute inset-0 scientific-grid opacity-[0.06]" />

        {/* ✅ blobs (bem suaves) */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-sasbio-green-bright/14 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 -left-40 h-[520px] w-[520px] rounded-full bg-sasbio-green-health/12 blur-3xl" />

        <div className="container mx-auto px-4 relative">
          {/* O que é + imagem do kit */}
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-6xl mx-auto mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
                  Banho no leito com <span className="gradient-text">dignidade</span> e{" "}
                  <span className="gradient-text">eficiência</span>
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                  {service.description}
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                  Atualmente, em muitos hospitais, o serviço é executado por dois profissionais e exige
                  tempo de preparo — o que pode gerar impacto financeiro negativo e sobrecarga da equipe.
                </p>

                {/* Durabilidade */}
                <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3">
                  <div className="text-sm text-muted-foreground">Durabilidade</div>
                  <div className="text-2xl font-display font-bold text-foreground">15 DIAS</div>
                </div>
              </div>

              <div className="w-full">
                <div className="relative w-full aspect-[10/10] rounded-2xl overflow-hidden border border-border shadow-sm bg-background/30">
                  <img
                    src="/images/servicespages/banho-no-leito/banho-no-leito.png"
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

          {/* Em números */}
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-6xl mx-auto mb-24"
          >
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm relative overflow-hidden">
              {/* ✅ gradient mais “verde” */}
              <div className="absolute inset-0 bg-gradient-to-br from-sasbio-green-health/18 via-sasbio-blue-light/10 to-transparent" />
              <div className="absolute inset-0 molecular-pattern opacity-10" />

              <div className="relative grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <img
                    src="/images/logo/sasbio-logo-semfundo.png"
                    alt="SASBIO"
                    className="h-16 opacity-70 mb-6"
                    draggable={false}
                  />

                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                    Eficiência que impacta <span className="gradient-text">rotina e custos</span>
                  </h2>

                  <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                    O Banho no Leito SASBIO reduz tempo por procedimento e melhora a experiência do paciente,
                    além de contribuir para reduzir riscos de contaminação cruzada.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mt-8">
                    {highlights.map((h) => {
                      const HIcon = h.icon;
                      return (
                        <div
                          key={h.title}
                          className="rounded-2xl border border-border bg-background/60 p-5 relative overflow-hidden"
                        >
                          {/* ✅ base tint como no BenefitsSection */}
                          <div className="absolute inset-0 bg-gradient-to-br from-sasbio-green-health/8 via-sasbio-blue-light/6 to-transparent" />
                          <div className="relative">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <HIcon className="w-4 h-4" />
                              Indicador
                            </div>
                            <div className="text-2xl md:text-3xl font-display font-bold text-foreground mt-1">
                              {h.title}
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">{h.description}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="w-full">
                  <div className="relative w-full aspect-[16/12] rounded-3xl overflow-hidden border border-border bg-background/40">
                    <img
                      src="/images/servicespages/banho-no-leito/banho-no-leito-what-is.jpeg"
                      alt="Banho no leito em números"
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                    {/* ✅ mais verde */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-sasbio-green-health/28 via-sasbio-blue-tech/12 to-transparent" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Benefícios */}
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-6xl mx-auto mb-24"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight text-center">
              Benefícios <span className="gradient-text">reais</span> no dia a dia
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mt-4 text-center max-w-3xl mx-auto">
              Mais conforto ao paciente, menos esforço físico à equipe e mais eficiência operacional para a instituição.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {benefits.map((b, i) => {
                const BIcon = b.icon;
                return (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="rounded-3xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                  >
                    {/* ✅ base tint + hover tint no padrão */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sasbio-green-health/8 via-sasbio-blue-light/6 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-sasbio-green-health to-sasbio-green-bright opacity-0 group-hover:opacity-[0.12] transition-opacity duration-300" />

                    <div className="relative">
                      <div className="w-12 h-12 rounded-2xl border border-border bg-background/70 flex items-center justify-center relative overflow-hidden mb-4">
                        <div className="absolute inset-0 bg-gradient-to-tr from-sasbio-green-health/15 via-transparent to-transparent" />
                        <BIcon className="w-6 h-6 text-sasbio-green-health relative" />
                      </div>

                      <div className="text-lg font-display font-bold text-foreground">{b.title}</div>
                      <p className="text-muted-foreground mt-2 leading-relaxed">{b.description}</p>

                      {/* ✅ linha inferior no hover */}
                      <div className="absolute -bottom-6 left-0 h-1 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-sasbio-green-health to-sasbio-green-bright" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Como funciona (INTERATIVO) */}
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-6xl mx-auto mb-24"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight text-center">
              Como <span className="gradient-text">funciona</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mt-4 text-center max-w-3xl mx-auto">
              Um processo organizado, seguro e humanizado — com foco em conforto e padronização do cuidado.
            </p>

            <div className="mt-10 rounded-3xl border border-border bg-card p-6 md:p-8 relative overflow-hidden">
              {/* ✅ verde/azul como no padrão */}
              <div className="absolute inset-0 bg-gradient-to-br from-sasbio-green-health/18 via-sasbio-blue-light/10 to-transparent" />
              <div className="absolute inset-0 molecular-pattern opacity-12" />

              <div className="relative grid lg:grid-cols-2 gap-8 items-stretch">
                {/* Painel (esquerda) */}
                <div className="rounded-3xl border border-border bg-background/60 p-6 md:p-7 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-sasbio-green-health/8 via-sasbio-blue-light/6 to-transparent" />
                  <motion.div
                    key={currentHow.key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="relative h-full flex flex-col"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-semibold tracking-widest text-muted-foreground">
                          DETALHE
                        </div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-1">
                          {currentHow.title}
                        </h3>
                      </div>

                      <div className="w-12 h-12 rounded-2xl border border-border bg-background/80 flex items-center justify-center">
                        <currentHow.icon className="w-6 h-6 text-sasbio-green-health" />
                      </div>
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                      {currentHow.description}
                    </p>

                    <div className="mt-6 flex-1 flex items-end">
                      <div className="w-full">
                        <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-border bg-background">
                          <img
                            src={currentHow.image}
                            alt={currentHow.title}
                            className="w-full h-full object-cover"
                            draggable={false}
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-sasbio-green-health/25 via-sasbio-blue-tech/10 to-transparent" />
                        </div>

                        <div className="mt-5 flex items-center gap-3">
                          <div className="relative w-14 h-14 rounded-full overflow-hidden border border-border bg-background">
                            <img
                              src={currentHow.image}
                              alt={currentHow.title}
                              className="w-full h-full object-cover"
                              draggable={false}
                            />
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Visual ilustrativo do tópico selecionado
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Botões (direita) */}
                <div className="rounded-3xl border border-border bg-background/60 p-4 md:p-5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-sasbio-green-health/8 via-sasbio-blue-light/6 to-transparent" />
                  <div className="relative flex flex-col gap-3">
                    {howItems.map((item, idx) => {
                      const ActiveIcon = item.icon;
                      const isActive = idx === activeHow;

                      return (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => setActiveHow(idx)}
                          className={[
                            "w-full text-left rounded-2xl border transition-all relative overflow-hidden group",
                            "px-4 py-4 md:px-5 md:py-5",
                            isActive
                              ? "border-sasbio-green-health/40 bg-sasbio-green-health/10"
                              : "border-border bg-background hover:bg-muted/50",
                          ].join(" ")}
                        >
                          {/* ✅ hover tint no padrão */}
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sasbio-green-health to-sasbio-green-bright opacity-0 group-hover:opacity-[0.10] transition-opacity duration-300" />

                          <div className="relative flex items-start gap-3">
                            <div
                              className={[
                                "w-10 h-10 rounded-2xl border flex items-center justify-center shrink-0",
                                isActive
                                  ? "border-sasbio-green-health/30 bg-background"
                                  : "border-border bg-background",
                              ].join(" ")}
                            >
                              <ActiveIcon
                                className={[
                                  "w-5 h-5",
                                  isActive ? "text-sasbio-green-health" : "text-muted-foreground",
                                ].join(" ")}
                              />
                            </div>

                            <div className="min-w-0">
                              <div className="font-display font-bold tracking-wide text-foreground">
                                {item.title}
                              </div>
                              <div className="text-sm text-muted-foreground mt-1 line-clamp-2">
                                {item.description}
                              </div>
                            </div>
                          </div>

                          {/* ✅ linha inferior */}
                          <div
                            className={[
                              "absolute bottom-0 left-0 h-1 w-0 transition-all duration-300",
                              isActive ? "w-full" : "group-hover:w-full",
                              "bg-gradient-to-r from-sasbio-green-health to-sasbio-green-bright",
                            ].join(" ")}
                          />
                        </button>
                      );
                    })}

                    <div className="mt-2 text-xs text-muted-foreground">
                      Clique em um tópico para ver os detalhes e a imagem correspondente.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* CTA Final */}
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-6xl mx-auto"
          >
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm relative overflow-hidden">
              {/* ✅ CTA com mais verde */}
              <div className="absolute inset-0 bg-gradient-to-br from-sasbio-green-health/18 via-sasbio-blue-light/10 to-transparent" />
              <div className="absolute inset-0 molecular-pattern opacity-10" />

              <div className="relative grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-tight">
                    Baixe o manual completo e leve um cuidado mais{" "}
                    <span className="gradient-text">eficiente</span> ao seu hospital.
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mt-3">
                    Fale com nossos especialistas e implemente uma solução que melhora a experiência do paciente e otimiza a rotina assistencial.
                  </p>

                  <div className="mt-6">
                    <img
                      src="/images/logo/sasbio-logo-semfundo.png"
                      alt="SASBIO"
                      className="h-16 opacity-60"
                      draggable={false}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href="/images/servicespages/banho-no-leito/folder/Manual-banho-no-leito.pdf"
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-base font-semibold bg-sasbio-green-health text-white hover:opacity-90 transition"
                  >
                    <Download className="w-5 h-5" />
                    Baixe o folder completo
                  </a>

                  <Link
                    to="/contato"
                    className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold border border-border text-foreground hover:bg-muted transition"
                  >
                    Falar com um especialista
                  </Link>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </section>
    </Layout>
  );
}
