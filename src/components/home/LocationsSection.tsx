import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ExternalLink, ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import { LocationsLeaflet } from "@/components/LocationsLeaflet";
import { cn } from "@/lib/utils";

type Tab = "localizacoes" | "representantes";

type LocationItem = {
  label: string;
  query: string;
};

const locations: LocationItem[] = [
  { label: "Brasília - DF", query: "SASBIO Brasília" },
  { label: "Rio de Janeiro - RJ", query: "R. Acre, 83 - Centro" },
];

function mapsLink(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function LocationsSection() {
  const [tab, setTab] = useState<Tab>("localizacoes");
  const [open, setOpen] = useState(true);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 scientific-grid opacity-20" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sasbio-blue-tech/10 text-sasbio-blue-tech text-sm font-medium mb-6">
            Presença Nacional
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Onde <span className="gradient-text">Estamos</span> e <span className="gradient-text">nossos Clientes</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 🗺️ MAPA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* BOX COM ABAS E TOGGLE */}
            <div className="absolute top-4 left-4 z-[20]">
              <motion.div
                layout
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-background/85 backdrop-blur-md border border-border/60 shadow-sm rounded-xl p-3 w-[270px]"
              >
                {/* Abas */}
                <div className="flex gap-1 bg-muted/60 rounded-lg p-0.5 mb-3">
                  <button
                    onClick={() => setTab("localizacoes")}
                    className={cn(
                      "flex-1 flex items-center justify-center gap-1.5 text-xs font-medium py-1 px-2 rounded-md transition-all",
                      tab === "localizacoes"
                        ? "bg-background shadow-sm text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <MapPin className="w-3 h-3 text-sasbio-green-health" />
                    Localizações
                  </button>
                  <button
                    onClick={() => setTab("representantes")}
                    className={cn(
                      "flex-1 flex items-center justify-center gap-1.5 text-xs font-medium py-1 px-2 rounded-md transition-all",
                      tab === "representantes"
                        ? "bg-background shadow-sm text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <MapPin className="w-3 h-3 text-red-500" />
                    Representantes
                  </button>
                </div>

                {/* Conteúdo da aba ativa */}
                <AnimatePresence mode="wait" initial={false}>
                  {tab === "localizacoes" ? (
                    <motion.div
                      key="localizacoes"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      {/* Header com toggle */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          Unidades
                        </p>
                        <button
                          onClick={() => setOpen((prev) => !prev)}
                          className="text-muted-foreground hover:text-foreground transition"
                          aria-label={open ? "Recolher" : "Expandir"}
                        >
                          {open ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-2">
                              {locations.map((loc) => (
                                <a
                                  key={loc.label}
                                  href={mapsLink(loc.query)}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="group flex items-center justify-between gap-2 text-sm text-muted-foreground hover:text-foreground transition"
                                >
                                  <span className="truncate">{loc.label}</span>
                                  <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition" />
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="representantes"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <p className="text-sm text-muted-foreground">
                        Presença em todas as{" "}
                        <span className="font-semibold text-foreground">27 capitais</span>{" "}
                        brasileiras.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            <LocationsLeaflet mode={tab} />
          </motion.div>

          {/* 🖼️ CLIENTES */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <img
              src="/images/clientes/nossos-clientes.png"
              alt="Instituições atendidas pela SASBIO"
              className="w-full rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
