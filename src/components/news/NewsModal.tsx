import { motion, AnimatePresence } from "framer-motion";
import type { NewsItem } from "@/content/news";
import { X, Calendar } from "lucide-react";
import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  news: NewsItem | null;
};

export function NewsModal({ open, onClose, news }: Props) {
  // trava o scroll do body quando modal está aberto
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC para fechar
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && news && (
        <>
          {/* backdrop */}
          <motion.button
            aria-label="Fechar modal"
            className="fixed inset-0 z-[80] cursor-default bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* modal wrapper */}
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            role="dialog"
            aria-modal="true"
            aria-label={news.title}
            onClick={(e) => e.stopPropagation()}
          >
            {/* card */}
            <motion.div
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="
                relative w-full max-w-4xl
                max-h-[90vh]
                bg-background
                rounded-3xl
                shadow-2xl
                overflow-hidden
                border border-border
              "
            >
              {/* header image */}
              <div className="relative h-52 sm:h-64">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover"
                  draggable={false}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-black/10 to-transparent" />

                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 h-10 w-10 rounded-2xl bg-background/80 backdrop-blur border border-border flex items-center justify-center hover:bg-background transition"
                  aria-label="Fechar"
                  type="button"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-sasbio-blue-tech/15 text-sasbio-blue-tech text-xs font-medium border border-sasbio-blue-tech/20">
                    {news.category}
                  </span>
                </div>
              </div>

              {/* scroll area */}
              <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(news.date).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h2 className="mt-3 text-2xl sm:text-3xl font-display font-bold text-foreground">
                  {news.title}
                </h2>

                {/* conteúdo longo com scroll aqui */}
                <div className="mt-4 text-muted-foreground leading-relaxed whitespace-pre-line">
                  {news.content}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
