// src/pages/services/biodescontaminacao.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Sparkles } from "lucide-react";
import { ProcessWheel } from "@/components/ProcessWheel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const service = {
  icon: Sparkles,
  title: "Biodescontaminação",
  subtitle: "Tecnologia de ponta para ambientes 100% seguros",
  description:
    "A biodescontaminação é o processo mais avançado para eliminação de patógenos em ambientes hospitalares. Utilizamos peróxido de hidrogênio vaporizado (H2O2) que atinge todos os cantos do ambiente.",
  features: [
    "Eliminação de 99,9999% dos patógenos",
    "Processo sem resíduos tóxicos",
    "Validação com indicadores biológicos",
    "Certificação após cada serviço",
    "Compatível com equipamentos médicos",
    "Tempo de aplicação otimizado",
  ],
  gradient: "from-sasbio-blue-tech to-sasbio-blue-light",
};

const benefits = [
  {
    title: "Segurança sanitária elevada",
    description:
      "Redução significativa do risco de infecções e contaminações cruzadas em ambientes críticos.",
  },
  {
    title: "Padronização e rastreabilidade",
    description:
      "Procedimentos documentados, relatórios e validações para auditoria e conformidade.",
  },
  {
    title: "Proteção de pessoas e operação",
    description:
      "Ambientes mais seguros para pacientes, equipes e visitantes, com menor exposição a agentes biológicos.",
  },
  {
    title: "Eficiência e ganho de tempo",
    description:
      "Processo otimizado para reduzir indisponibilidade de áreas e melhorar a continuidade do serviço.",
  },
  {
    title: "Conformidade com normas",
    description:
      "Apoio ao cumprimento de protocolos e diretrizes de biossegurança aplicáveis ao seu segmento.",
  },
  {
    title: "Qualidade comprovada",
    description:
      "Validação com indicadores e critérios técnicos, reforçando confiança e credibilidade institucional.",
  },
];

export default function BiodescontaminacaoPage() {
  const Icon = service.icon;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Imagem de fundo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/servicespages/biodescontaminacao/cover.jpg')",
          }}
        />

        {/* Gradiente azul (forte à esquerda, nada na direita) */}
        <div className="absolute inset-0 bg-gradient-to-r from-sasbio-blue-tech via-sasbio-blue-tech/35 to-transparent" />

        {/* Texturas */}
        <div className="absolute inset-0 scientific-grid opacity-10" />
        <div className="absolute inset-0 molecular-pattern opacity-20" />

        {/* Conteúdo */}
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

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              {service.title}
            </h1>

            <p className="text-xl text-white/90">{service.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* ✅ O que é a Biodescontaminação (layout estilo 2ª imagem) */}
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-6xl mx-auto mb-20"
          >
            {/* Linha de cima: texto + imagem à direita */}
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Esquerda */}
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
                  O que é a <span className="gradient-text">Biodescontaminação?</span>{" "}
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                  A biodescontaminação é um processo técnico de eliminação de
                  agentes biológicos (vírus, bactérias, fungos e outros
                  patógenos) em ambientes críticos. Diferente da limpeza comum,
                  ela atua de forma abrangente, alcançando superfícies e áreas
                  de difícil acesso, com validação e rastreabilidade do
                  resultado.
                </p>
              </div>

              {/* Direita: espaço para imagem */}
              <div className="w-full">
                <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-border shadow-sm">
                  <img
                    src="/images/servicespages/biodescontaminacao/what-is.jpg"
                    alt="Biodescontaminação"
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-sasbio-blue-tech/20 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* Linha de baixo: imagem esquerda + accordion direita */}
            <div className="grid lg:grid-cols-[420px_1fr] gap-10 items-stretch mt-12">
              {/* Esquerda: imagem */}
              <div className="relative w-full rounded-3xl overflow-hidden border border-border shadow-sm min-h-[260px]">
                <img
                  src="/images/servicespages/biodescontaminacao/what-is-secondary.jpg"
                  alt="Aplicação em ambientes críticos"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent" />
              </div>

              {/* Direita: accordion estilo Elementor */}
              <div className="rounded-3xl border border-border overflow-hidden bg-card">
                <Accordion
                  type="single"
                  collapsible
                  defaultValue="objetivo"
                  className="w-full"
                >
                  <AccordionItem value="objetivo" className="border-b border-border">
                    <AccordionTrigger className="px-6 md:px-7 py-5 md:py-6 text-left font-display font-bold text-foreground">
                      Locais de atuação
                    </AccordionTrigger>
                    <AccordionContent className="px-6 md:px-7 pb-6 text-muted-foreground text-base md:text-lg leading-relaxed">
                      Residências, Academias e Eventos, Veículos e Frotas, Empresas, Escolas, Creches e Berçários, Granjas e Armazéns, Indústrias, Transportes de Cargas, Hotéis, Pousadas e Motéis, Aeroportos, Shoppings e Supermercados, Auditórios, Cinemas e Teatros, Contêineres, Portos e Entrepostos, Hospitais, Clínicas e Consultórios
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="aplicacao" className="border-b border-border">
                    <AccordionTrigger className="px-6 md:px-7 py-5 md:py-6 text-left font-display font-bold text-foreground">
                      Duração
                    </AccordionTrigger>
                    <AccordionContent className="px-6 md:px-7 pb-6 text-muted-foreground text-base md:text-lg leading-relaxed">
                      Os nossos serviços contam com 90 dias de garantia, com eficácia validada e certificada por biólogos e médicos especializados em medicina do trabalho.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="resultado">
                    <AccordionTrigger className="px-6 md:px-7 py-5 md:py-6 text-left font-display font-bold text-foreground">
                      Resultado
                    </AccordionTrigger>
                    <AccordionContent className="px-6 md:px-7 pb-6 text-muted-foreground text-base md:text-lg leading-relaxed">
                      Seu local protegido contra vírus e bactérias e outros patógenos. Adotamos política de compliance em todas as fases de nosso processo de vendas e contratações até a finalização dos serviços prestados.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </motion.section>

          {/* ✅ Benefícios */}
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-6xl mx-auto mb-24"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight text-center">
              <span className="gradient-text">Benefícios</span>{" "}
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mt-4 text-center max-w-3xl mx-auto">
              Uma solução completa para elevar o nível de biossegurança, reduzir
              riscos e entregar evidência técnica do resultado.
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
          {/* Process Wheel – CENTRALIZADA */}
          <div className="mt-24 flex justify-center">
            <div className="w-full max-w-6xl">
              <ProcessWheel
                title="Biodescontaminação Assistida e Certificada"
                wheelImageSrc="/images/servicespages/biodescontaminacao/steps/process-wheel.png"
                steps={[
                  {
                    id: "capacitacao",
                    title: "Capacitação e qualificação de equipes de limpeza",
                    description:
                      "Oferecemos treinamento, com pelo menos 20 horas de duração, em atendimento a protocolos sanitários operacionais e técnicas de higienização de superfícies, de acordo com manuais da ANVISA e Fiocruz. Os operadores de limpeza terão ao final do treinamento Certificado de Conclusão assinado por médico habilitado em medicina do trabalho e engenheiro sanitarista.",
                  },
                  {
                    id: "anamnese",
                    title: "Anamnese Ambiental",
                    description:
                      "O procedimento de anamnese ambiental permite diagnóstico e elaboração de protocolos sanitários e operacionais, para composição de POP (Procedimento Padrão). São utilizados testes ambientais, de superfícies e de pessoas que tenham acesso contínuo a locais comuns e coletivos, o que gera relatório e mapeamento de riscos, com a avaliação de incidência e prevalência de germes presentes e nocivos à saúde humana.",
                  },
                  {
                    id: "higienizacao",
                    title: "Higienização de Alta Performance",
                    description:
                      "Importante destacar a higienização de alta performance, com aplicação de solução química através de operação mecânica, em locais de maior incidência de utilização das mãos, em objetos e superfícies, tais como maçanetas, corrimãos, elevadores e outros, sendo estes principais vetores de microrganismos. Os produtos ficam à disposição das equipes de limpeza, que serão capacitadas de acordo com protocolos sanitários e operacionais, com certificação assinada por engenheiro sanitarista e médicos com especialização em medicina do trabalho.",
                  },
                  {
                    id: "profilaxia",
                    title: "Profilaxia Ambiental",
                    description:
                      "Na profilaxia ambiental, temos o processo de nebulização a frio, através da dispersão de micropartículas de 0,5 a 1,0 microns, que penetram nas superfícies, com atividade prevalente, combatendo e eliminando microrganismos pelo período de 90 dias de duração. A execução do procedimento é realizada por técnicos de acordo com as normas da ABNT e adotando critérios do Exército Brasileiro. Os EPI's e equipamentos detêm selos de segurança quanto ao uso e qualidade.",
                  },
                  {
                    id: "Testes_Certificado",
                    title: "Testes de pessoas e superficies + Certificado",
                    description:
                      "",
                  },
                ]}
                topAngle={0}
                stepTweaks={{
                  capacitacao: 0,
                  Testes_Certificado: 22,
                  profilaxia: 35,
                  higienizacao: 22,
                  anamnese: 1,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
