import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FranchiseSection() {
  return (
    <section
      id="franquias"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* 🔹 Background Image */}
      <img
        src="/images/franquias/seja_franqueado_sasbio.webp"
        alt="Franquia SASBIO"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* 🔹 Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link to="/sejaumfranqueado">
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.98 }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Button
                size="lg"
                className="px-10 py-6 text-lg font-display font-semibold 
                           bg-white text-sasbio-blue-tech 
                           hover:bg-white/90 
                           shadow-2xl rounded-full"
              >
                Seja um Franqueado
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
