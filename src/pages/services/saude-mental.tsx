// src/pages/services/saude-mental.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useRef } from "react";
import {
  ArrowLeft,
  HeartPulse,
  Video,
  UserRound,
  Building2,
  Hospital,
  Briefcase,
  Brain,
} from "lucide-react";

const service = {
  icon: Brain,
  title: "Saúde Mental",
  subtitle: "Cuidar da mente é cuidar do negócio",
  eyebrow: "As melhores soluções em Saúde Mental Corporativa",
  description:
    "O tratamento de saúde mental é essencial para o bem-estar e a qualidade de vida. Oferecemos serviços de diagnóstico psicológico, acompanhamento e suporte emocional, com uma abordagem moderna, acolhedora e baseada em evidências. Nosso objetivo é promover a saúde mental, reduzir o estigma e criar ambientes mais saudáveis e produtivos para indivíduos e organizações.",
};

const benefits = [
  {
    title: "Bem-estar e qualidade de vida",
    description:
      "Apoio profissional para reduzir sofrimento emocional, melhorar o humor, o sono e a rotina.",
  },
  {
    title: "Prevenção e cuidado contínuo",
    description:
      "Acompanhamento estruturado para identificar sinais precoces e reduzir agravamentos e afastamentos.",
  },
  {
    title: "Ambiente corporativo mais saudável",
    description:
      "Fortalecimento da cultura de cuidado, comunicação e segurança psicológica dentro das equipes.",
  },
];

const stats = [
  { label: "Trabalhadores afastados", value: "Quase 500 mil", note: "em 2024" },
  { label: "Ansiedade", value: "141 mil", note: "afastamentos" },
  { label: "Depressão", value: "113 mil", note: "casos" },
  { label: "Burnout", value: "4,8 mil", note: "benefícios concedidos" },
];

const solutions = [
  {
    image: "/images/servicespages/saude-mental/solutions/mente-saudavel.png",
    icon: HeartPulse,
    title: "Mente Saudável",
    description:
      "Programa estruturado para empresas públicas e privadas, com foco na prevenção, diagnóstico precoce e tratamento de transtornos emocionais.",
  },
  {
    image: "/images/servicespages/saude-mental/solutions/telemedicina.jpeg",
    icon: Video,
    title: "Telemedicina psicológica",
    description:
      "Consultas online com psicólogos especializados no controle do estresse, ansiedade e outros transtornos. Acesso rápido, seguro e humanizado.",
  },
  {
    image: "/images/servicespages/saude-mental/solutions/acompanhamento.jpeg",
    icon: UserRound,
    title: "Acompanhamento individualizado",
    description:
      "Cuidado contínuo para quem enfrenta desafios como depressão, psicoses, controle de impulsos e transtornos da infância e adolescência.",
  },
  {
    image: "/images/servicespages/saude-mental/solutions/referencia.jpeg",
    icon: Building2,
    title: "Centro de referência em saúde mental e bem-estar",
    description:
      "Espaço dedicado à promoção da saúde emocional, com foco no desenvolvimento humano e na criação de ambientes corporativos mais saudáveis.",
  },
  {
    image: "/images/servicespages/saude-mental/solutions/psiquiatria.jpeg",
    icon: Hospital,
    title: "Unidade de cuidados avançados em psiquiatria",
    description:
      "Atendimento psiquiátrico seguro e especializado, com estrutura hospitalar e laboratorial completa para casos mais complexos.",
  },
  {
    image: "/images/servicespages/saude-mental/solutions/envelhecimento.png",
    icon: Briefcase,
    title: "Programa de envelhecimento saudável no trabalho",
    description:
      "Preparação para aposentadoria ou transição de carreira, com foco no bem-estar emocional, propósito e estímulo ao empreendedorismo.",
  },
];


export default function SaudeMentalPage() {
    const Icon = service.icon;

  const railRef = useRef<HTMLDivElement | null>(null);

  const scrollByCards = (dir: "left" | "right") => {
    const el = railRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>("[data-solution-card]");
    const cardW = card?.offsetWidth ?? 360;
    const gap = 16; // gap-4 = 16px
    const amount = cardW + gap;

    el.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/servicespages/saude-mental/saude-mental-hero.jpeg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-sasbio-blue-tech via-sasbio-blue-tech/35 to-transparent" />
        <div className="absolute inset-0 scientific-grid opacity-10" />
        <div className="absolute inset-0 molecular-pattern opacity-20" />

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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* O que é */}
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
                  O que é o tratamento à{" "}
                  <span className="gradient-text">saúde mental?</span>
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                  {service.description}
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                  A SASBIO atua com programas corporativos de prevenção e cuidado,
                  com foco em acolhimento, evidências e acompanhamento
                  profissional — contribuindo para qualidade de vida e
                  performance sustentável nas organizações.
                </p>
              </div>

              <div className="w-full">
                <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-border shadow-sm">
                  <img
                    src="/images/servicespages/saude-mental/saude-mental.jpeg"
                    alt="Saúde mental no ambiente de trabalho"
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-sasbio-blue-tech/20 via-transparent to-transparent" />
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
              <span className="gradient-text">Benefícios</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mt-4 text-center max-w-3xl mx-auto">
              Cuidado estruturado, acolhedor e baseado em evidências para pessoas
              e organizações.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-3xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-lg font-display font-bold text-foreground">
                    {b.title}
                  </div>
                  <p className="text-muted-foreground mt-2 leading-relaxed">
                    {b.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Gatilho + números */}
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-6xl mx-auto mb-24"
          >
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-sasbio-blue-tech/10 via-transparent to-transparent" />

              <div className="relative grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <img
                    src="/images/logo/sasbio-logo-semfundo.png"
                    alt="SASBIO"
                    className="h-16 opacity-70 mb-6"
                    draggable={false}
                  />

                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                    Sua instituição está{" "}
                    <span className="gradient-text">preparada</span> para o
                    cenário atual?
                  </h2>

                  <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                    Os transtornos mentais já são uma das principais causas de
                    afastamento do trabalho no Brasil. Em 2024, os números
                    mostram um cenário que impacta diretamente clima
                    organizacional, custos e produtividade.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mt-8">
                    {stats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-2xl border border-border bg-background/60 p-5"
                      >
                        <div className="text-sm text-muted-foreground">
                          {s.label}
                        </div>
                        <div className="text-2xl md:text-3xl font-display font-bold text-foreground mt-1">
                          {s.value}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {s.note}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-muted-foreground mt-6">
                    Outros transtornos, como bipolaridade, abuso de substâncias e
                    estresse extremo, também têm crescido de forma alarmante.
                  </p>
                </div>

                <div className="w-full">
                  <div className="relative w-full aspect-[16/12] rounded-3xl overflow-hidden border border-border bg-background/40">
                    <img
                      src="/images/servicespages/saude-mental/saude-mental-numeros.png"
                      alt="Cenário atual e saúde mental no trabalho"
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-sasbio-blue-tech/25 via-transparent to-transparent" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

{/* Nossas Soluções (CARROSSEL) */}
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto mb-24"
      >
        <div className="relative">
  {/* Header centralizado */}
  <div className="text-center max-w-3xl mx-auto">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
      Nossas <span className="gradient-text">Soluções</span>
    </h2>

    <p className="text-muted-foreground text-lg leading-relaxed mt-3">
      Programas completos para prevenção, diagnóstico, acompanhamento e suporte clínico — com foco em bem-estar e resultados mensuráveis.
    </p>
  </div>

  {/* Setas no desktop (não quebram o centro) */}
  <div className="hidden md:flex items-center gap-2 absolute right-0 top-1/2 -translate-y-1/2">
    <button
      type="button"
      onClick={() => scrollByCards("left")}
      className="h-11 w-11 rounded-2xl border border-border bg-background/70 hover:bg-background transition flex items-center justify-center"
      aria-label="Anterior"
    >
      ←
    </button>
    <button
      type="button"
      onClick={() => scrollByCards("right")}
      className="h-11 w-11 rounded-2xl border border-border bg-background/70 hover:bg-background transition flex items-center justify-center"
      aria-label="Próximo"
    >
      →
    </button>
  </div>
</div>


        <div className="relative mt-10">
          {/* fade nas bordas (bem premium) */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-background to-transparent z-10" />

          <div
            ref={railRef}
            className="
              flex gap-4 overflow-x-auto pb-4
              snap-x snap-mandatory
              [-ms-overflow-style:none] [scrollbar-width:none]
            "
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {/* hide scrollbar webkit */}
            <style>{`
              .hide-scrollbar::-webkit-scrollbar { display: none; }
            `}</style>

            {solutions.map((s, i) => {
              const SolIcon = s.icon;

              return (
                <motion.div
  key={s.title}
  data-solution-card
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: i * 0.05 }}
  className="
    group snap-start
    min-w-[86%] sm:min-w-[420px] lg:min-w-[440px]
    rounded-3xl border border-border bg-card
    shadow-sm hover:shadow-md transition-shadow
    overflow-hidden
  "
>
  {/* IMAGEM TOPO */}
  <div className="relative h-36 w-full overflow-hidden">
    <img
      src={s.image}
      alt={s.title}
      className="w-full h-full object-cover"
      draggable={false}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
      }}
    />
  </div>

  {/* CONTEÚDO */}
  <div className="p-7">
    <h3 className="text-lg font-display font-bold text-foreground">
      {s.title}
    </h3>

    <p className="text-muted-foreground mt-2 leading-relaxed">
      {s.description}
    </p>

    <div className="mt-6 flex items-center gap-3">
      <Link
        to="/contato"
        className="inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-semibold bg-sasbio-blue-tech text-white hover:opacity-90 transition"
      >
        Falar com um especialista
      </Link>

      <span className="text-xs text-muted-foreground">
        Resposta rápida • Atendimento humanizado
      </span>
    </div>
  </div>

  {/* linha inferior no hover */}
  <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-sasbio-blue-tech to-sasbio-green-health" />
</motion.div>

              );
            })}
          </div>

          {/* dica mobile */}
          <p className="md:hidden text-sm text-muted-foreground mt-3">
            Arraste para o lado para ver mais soluções →
          </p>
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
              <div className="absolute inset-0 bg-gradient-to-r from-sasbio-blue-tech/10 via-transparent to-transparent" />

              <div className="relative grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-tight">
                    Quem cuida da mente, colhe produtividade, engajamento e{" "}
                    <span className="gradient-text">resultados reais.</span>
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mt-3">
                    Fale com nossos especialistas e transforme o clima da sua
                    empresa com um programa estruturado de saúde mental
                    corporativa.
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
                  <Link
                    to="/contato"
                    className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold bg-sasbio-blue-tech text-white hover:opacity-90 transition"
                  >
                    Falar com um especialista
                  </Link>

                  <a
                    href="tel:08000002359"
                    className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold border border-border text-foreground hover:bg-muted transition"
                  >
                    0800 000 2359
                  </a>

                  <a
                    href="https://wa.me/556193282424?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20Sa%C3%BAde%20Mental%20Corporativa%20da%20SASBIO."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold border border-border text-foreground hover:bg-muted transition"
                  >
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </section>
    </Layout>
  );
}
