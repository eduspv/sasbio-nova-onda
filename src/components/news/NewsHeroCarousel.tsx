import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { NewsItem } from "@/content/news";

type Props = {
  items: NewsItem[];
  onOpen: (n: NewsItem) => void;
};

export function NewsHeroCarousel({ items, onOpen }: Props) {
  const latest3 = useMemo(() => {
    return [...items]
      .sort((a, b) => +new Date(b.date) - +new Date(a.date))
      .slice(0, 3);
  }, [items]);

  const [i, setI] = useState(0);

  useEffect(() => {
    const t = window.setTimeout(() => setI((p) => (p + 1) % latest3.length), 5000);
    return () => window.clearTimeout(t);
  }, [i, latest3.length]);

  const current = latest3[i];

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
      <AnimatePresence mode="wait">
        <motion.button
          key={current.slug}
          onClick={() => onOpen(current)}
          className="w-full text-left rounded-3xl border border-white/15 bg-white/10 backdrop-blur p-6 sm:p-7 hover:bg-white/15 transition"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="flex items-center justify-between gap-4">
            <span className="px-3 py-1 rounded-full bg-white/15 text-white text-xs font-medium">
              {current.category}
            </span>
            <span className="text-white/75 text-xs">
              {new Date(current.date).toLocaleDateString("pt-BR")}
            </span>
          </div>

          <div className="mt-3 text-xl sm:text-2xl font-display font-bold text-white">
            {current.title}
          </div>

          <div className="mt-2 text-white/85 text-sm sm:text-base leading-relaxed line-clamp-2">
            {current.excerpt}
          </div>

          <div className="mt-4 text-white/90 text-sm font-semibold">
            Clique para abrir →
          </div>
        </motion.button>
      </AnimatePresence>

      {/* dots */}
      <div className="flex justify-center gap-2 mt-4">
        {latest3.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === i ? "w-10 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Ir para notícia ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
