import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type Step = {
  id: string;
  title: string;
  description: string;
};

type ProcessWheelProps = {
  title?: string;
  steps: Step[];
  className?: string;
  wheelImageSrc: string;
  sizePx?: number;

  /**
   * Ajuste global do topo (em graus).
   * Se a seta é no topo, normalmente -90.
   * Você pode calibrar ex: -92, -95...
   */
  topAngle?: number;

  /**
   * Ajuste fino por etapa (em graus).
   * Chave = step.id
   * Ex: { inventario: 2, profilaxia: -1 }
   */
  stepTweaks?: Record<string, number>;
};

function normalizeDeg(deg: number) {
  let d = ((deg % 360) + 360) % 360;
  if (d > 180) d -= 360;
  return d;
}
function highlightParts(
  text: string,
  partsToHighlight: string[] = ["SASBIO"]
) {
  if (!text) return null;

  // Escapa caracteres especiais (pra não quebrar o regex)
  const escaped = partsToHighlight
    .filter(Boolean)
    .map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

  if (!escaped.length) return text;

  const re = new RegExp(`(${escaped.join("|")})`, "g");
  const parts = text.split(re);

  return parts.map((p, idx) =>
    partsToHighlight.includes(p) ? (
      <span key={idx} className="gradient-text">
        {p}
      </span>
    ) : (
      <span key={idx}>{p}</span>
    )
  );
}


export function ProcessWheel({
  title,
  steps,
  className,
  wheelImageSrc,
  sizePx = 520,
  topAngle = -90,
  stepTweaks = {},
}: ProcessWheelProps) {
  const safeSteps = steps ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(() => {
    const firstStep = safeSteps[0];
    const tweak = firstStep ? (stepTweaks[firstStep.id] ?? 0) : 0;
    return topAngle + tweak;
  });

  const angleStep = useMemo(
    () => 360 / Math.max(safeSteps.length, 1),
    [safeSteps.length]
  );

  function handleSelect(index: number) {
    if (!safeSteps.length) return;

    const step = safeSteps[index];
    const tweak = stepTweaks[step.id] ?? 0;

    // alvo = colocar a etapa no topo + ajuste fino individual
    const target = topAngle - index * angleStep + tweak;

    const current = rotation;
    const delta = normalizeDeg(target - current);

    setRotation(current + delta);
    setActiveIndex(index);
  }

  const active =
    safeSteps[Math.min(activeIndex, safeSteps.length - 1)] ?? safeSteps[0];

  return (
    <div className={`w-full ${className ?? ""}`}>
 {title && (
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-8">
    {highlightParts(title, ["Assistida", "Certificada"])}
  </h2>
)}


      {/* BOTÕES EM CIMA */}
      <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
        {safeSteps.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => handleSelect(i)}
            className={[
              "px-4 py-2 rounded-full border text-sm font-medium transition-all",
              "bg-card/80 backdrop-blur",
              i === activeIndex
                ? "border-sasbio-blue-tech ring-2 ring-sasbio-blue-tech/25"
                : "border-border hover:border-sasbio-blue-tech/40",
            ].join(" ")}
          >
            <span className="text-muted-foreground mr-2">{i + 1}</span>
            <span className="text-foreground">{s.title}</span>
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-[minmax(0,520px)_1fr] gap-10 items-start justify-items-center lg:justify-items-start">
        {/* RODA */}
        <div className="relative w-full" style={{ maxWidth: sizePx }}>
          <div className="relative aspect-square mx-auto">
            {/* SETA FIXA (dentro da roda) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 z-30 pointer-events-none">
              <div
                className="w-0 h-0
                  border-l-[10px] border-l-transparent
                  border-r-[10px] border-r-transparent
                  border-t-[16px] border-t-sasbio-green-health
                  drop-shadow"
              />
            </div>
{/* IMAGEM GIRANDO */}
<motion.div
  className="absolute inset-0 rounded-full overflow-hidden flex items-center justify-center"
  animate={{ rotate: rotation }}
  transition={{ type: "spring", stiffness: 120, damping: 28 }}
  style={{ transformOrigin: "50% 50%" }}
>
  {/* AJUSTE FINO DA IMAGEM */}
  <div className="w-full h-full -translate-y-8 scale-150">
    <img
      src={wheelImageSrc}
      alt="Processo"
      className="w-full h-full object-contain select-none pointer-events-none block"
      draggable={false}
    />
  </div>
</motion.div>



          </div>
        </div>

        {/* COLUNA DIREITA */}
        <div className="w-full max-w-xl">
          {/* BOX SASBIO */}
            {/* INDICADOR DE ETAPA (SEM CAIXA) */}
            <div className="mb-6 w-full">
            <div className="flex items-start gap-4">
                {/* Logo */}
                <div className="shrink-0 w-18 h-18 rounded-full border border-border flex items-center justify-center">
                <img
                    src="/images/logo/sasbio-logo-semfundo.png"
                    alt="Logo SASBIO"
                    className="w-14 h-14 object-contain"
                    draggable={false}
                />
                </div>

                {/* Texto */}
                <div className="flex-1">
                <div className="text-xs text-muted-foreground">
                    Etapa atual
                </div>

                <div className="text-lg font-semibold text-foreground leading-tight">
                    {activeIndex + 1} • {active.title}
                </div>

                {/* Linha elegante */}
                <div className="mt-2 h-[5px] w-20 bg-gradient-to-r from-sasbio-blue-tech to-sasbio-green-health rounded-full" />
                </div>
            </div>
</div>
          {/* TEXTO */}
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-card rounded-2xl border-border  p-6"
          >
            <p className="text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed">
  {active.description}
</p>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
