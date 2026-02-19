// src/components/HotspotsImage.tsx
import { useId } from "react";
import { Plus } from "lucide-react";

type Hotspot = {
  id: string;
  x: number; // % (0-100)
  y: number; // % (0-100)
  title: string;
  description: string;
  side?: "left" | "right"; // preferencia do tooltip
};

type HotspotsImageProps = {
  src: string;
  alt: string;
  hotspots: Hotspot[];
  className?: string;
};

export function HotspotsImage({ src, alt, hotspots, className }: HotspotsImageProps) {
  const uid = useId();

  return (
    <div className={["relative w-full", className ?? ""].join(" ")}>
      <img
        src={src}
        alt={alt}
        className="w-full h-auto rounded-3xl border border-border block"
        draggable={false}
      />

      {hotspots.map((h, idx) => {
        const labelId = `${uid}-${h.id}-${idx}`;
        const side = h.side ?? (h.x > 55 ? "left" : "right");

        return (
          <div
            key={h.id}
            className="absolute z-10"
            style={{ left: `${h.x}%`, top: `${h.y}%`, transform: "translate(-50%, -50%)" }}
          >
            {/* Botão + */}
            <button
              type="button"
              aria-describedby={labelId}
              className={[
                "group relative grid place-items-center",
                "w-10 h-10 rounded-full",
                "bg-white/95 border border-border shadow-sm",
                "hover:shadow-md transition",
              ].join(" ")}
            >
              <span className="absolute inset-0 rounded-full ring-0 group-hover:ring-4 ring-sasbio-green-health/20 transition" />
              <Plus className="w-5 h-5 text-sasbio-green-health" />

              {/* Tooltip */}
              <div
                id={labelId}
                className={[
                  "pointer-events-none opacity-0 group-hover:opacity-100",
                  "transition duration-150",
                  "absolute top-1/2 -translate-y-1/2",
                  side === "left" ? "right-12" : "left-12",
                  "w-[260px] md:w-[320px]",
                  "rounded-2xl border border-border bg-card shadow-lg",
                  "p-4 text-left",
                ].join(" ")}
              >
                <div className="font-display font-bold text-foreground">{h.title}</div>
                <div className="mt-1 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {h.description}
                </div>

                {/* setinha do tooltip */}
                <div
                  className={[
                    "absolute top-1/2 -translate-y-1/2 w-3 h-3 rotate-45",
                    "bg-card border border-border",
                    side === "left" ? "right-[-7px] border-l-0 border-b-0" : "left-[-7px] border-r-0 border-t-0",
                  ].join(" ")}
                />
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}
