import { motion } from "framer-motion";
import { Users } from "lucide-react";

export function TeamSection() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 scientific-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              {/* Placeholder for office image */}
              <div className="absolute inset-0 bg-gradient-to-br from-sasbio-blue-tech to-sasbio-green-health">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Users className="w-20 h-20 mx-auto mb-4 opacity-50" />
                    <p className="text-white/70 text-sm">Imagem do Escritório</p>
                  </div>
                </div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Stats Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-8 md:right-8 glass-card rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sasbio-green-health to-sasbio-green-bright flex items-center justify-center">
                  <span className="text-white font-display font-bold text-xl">+</span>
                </div>
                <div>
                  <p className="font-display font-bold text-3xl text-foreground">50</p>
                  <p className="text-muted-foreground text-sm">Especialistas</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-sasbio-blue-tech/10 text-sasbio-blue-tech text-sm font-medium mb-6">
              Nossa Equipe
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Equipe de{" "}
              <span className="gradient-text">Especialistas</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Nosso time é formado por profissionais altamente capacitados, com formação em 
              áreas como microbiologia, enfermagem, engenharia e gestão hospitalar.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Cada membro da equipe SASBIO passa por treinamentos contínuos e certificações 
              que garantem a excelência em todos os serviços prestados. A combinação de 
              conhecimento técnico e humanização é o que nos diferencia.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "100%", label: "Satisfação" },
                { value: "24/7", label: "Suporte" },
                { value: "5+", label: "Anos" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="font-display font-bold text-2xl md:text-3xl gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
