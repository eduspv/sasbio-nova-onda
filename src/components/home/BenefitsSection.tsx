import { motion } from "framer-motion";
import React from "react";

const benefits = [
  {
    image: "/images/benefits/sem-residuos.png",
    title: "Sem Resíduos",
    description:
      "Processo limpo e sustentável, sem geração de resíduos tóxicos ou contaminantes após a aplicação.",
    // ✅ cores SASBIO por card
    hoverGradient: "from-sasbio-green-health to-sasbio-green-bright",
  },
  {
    image: "/images/benefits/protecao.png",
    title: "Proteção Total",
    description:
      "Eliminação de até 99,9999% dos patógenos, incluindo vírus, bactérias e fungos resistentes.",
    hoverGradient: "from-sasbio-blue-tech to-sasbio-blue-light",
  },
  {
    image: "/images/benefits/garantia.png",
    title: "Garantia de Qualidade",
    description:
      "Certificação e laudos técnicos comprovando a eficácia do serviço realizado.",
    hoverGradient: "from-sasbio-blue-light to-sasbio-green-health",
  },
  {
    image: "/images/benefits/prevencao.png",
    title: "Prevenção",
    description: "Redução significativa de infecções hospitalares e contaminações cruzadas.",
    hoverGradient: "from-sasbio-green-bright to-sasbio-blue-tech",
  },
  {
    image: "/images/benefits/mais-saude.png",
    title: "Mais Saúde",
    description: "Ambientes mais saudáveis para pacientes, colaboradores e visitantes.",
    hoverGradient: "from-sasbio-blue-tech to-sasbio-green-health",
  },
  {
    image: "/images/benefits/anvisa.png",
    title: "ANVISA",
    description:
      "Produtos e processos em conformidade com as normas da ANVISA e órgãos reguladores.",
    hoverGradient: "from-sasbio-green-health to-sasbio-blue-light",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
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
            <span className="gradient-text">VANTAGENS</span> E{" "}
            <span className="gradient-text">BENEFÍCIOS</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça as vantagens que fazem da SASBIO referência em biossegurança.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* ✅ card com cor SASBIO + muda no hover + “vai pra frente” */}
              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="group relative h-full rounded-2xl p-8  overflow-hidden border-sasbio-blue-tech/10 bg-white"
              >
                {/* ✅ base tint (bem leve, identidade SASBIO) */}
                <div className="absolute inset-0 bg-gradient-to-br from-sasbio-blue-tech/5 via-sasbio-blue-light/5 to-sasbio-green-health/5" />

                {/* ✅ hover tint (muda cor ao passar mouse) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.hoverGradient} opacity-0 group-hover:opacity-[0.14] transition-opacity duration-300`}
                />

                {/* ✅ borda iluminada no hover */}
                <div
                  className={`pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-white/30 transition duration-300`}
                />

                {/* Content wrapper (para ficar acima dos overlays) */}
                <div className="relative z-10">
                  {/* ✅ IMAGEM CENTRALIZADA */}
                  <div className="flex justify-center mb-6">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-20 h-24 object-contain drop-shadow-sm"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-center font-display font-semibold text-lg text-foreground mb-3 transition-colors duration-300 group-hover:text-sasbio-blue-tech`}
                  >
                    {benefit.title}
                  </h3>
                  {/* Description – aparece apenas no hover */}
                  <p
                    className="
                      text-center text-muted-foreground text-sm leading-relaxed
                      opacity-0 translate-y-2
                      group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-300 ease-out
                      pointer-events-none
                    "
                  >
                    {benefit.description}
                  </p>
                </div>

                {/* ✅ linha inferior que aparece no hover (bem SASBIO) */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r ${benefit.hoverGradient}`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
