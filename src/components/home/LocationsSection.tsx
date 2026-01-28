import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const clients = [
  "Hospital Sírio-Libanês",
  "Hospital Albert Einstein",
  "Grupo Fleury",
  "Hospital Oswaldo Cruz",
  "Santa Casa SP",
  "Hospital Samaritano",
];

const locations = [
  { state: "SP", x: 65, y: 70 },
  { state: "RJ", x: 72, y: 68 },
  { state: "MG", x: 60, y: 60 },
  { state: "PR", x: 55, y: 75 },
  { state: "SC", x: 52, y: 80 },
  { state: "RS", x: 48, y: 85 },
  { state: "BA", x: 70, y: 45 },
  { state: "PE", x: 78, y: 35 },
  { state: "CE", x: 75, y: 28 },
  { state: "GO", x: 52, y: 55 },
];

export function LocationsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 scientific-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Onde <span className="gradient-text">Estamos</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square bg-gradient-to-br from-muted/50 to-muted rounded-3xl p-8 overflow-hidden">
              {/* Simplified Brazil Map Outline */}
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
                <path
                  d="M30 15 Q50 10 75 20 Q85 35 82 55 Q80 70 70 80 Q55 90 40 85 Q25 80 20 65 Q15 45 25 30 Q28 20 30 15Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-sasbio-blue-tech"
                />
              </svg>
              
              {/* Location Markers */}
              {locations.map((location, index) => (
                <motion.div
                  key={location.state}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className="absolute"
                  style={{ left: `${location.x}%`, top: `${location.y}%` }}
                >
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="relative group cursor-pointer"
                  >
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-sasbio-green-health to-sasbio-green-bright shadow-lg" />
                    <motion.div 
                      className="absolute inset-0 w-4 h-4 rounded-full bg-sasbio-green-health"
                      animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                    
                    {/* Tooltip */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="px-2 py-1 bg-foreground text-background text-xs rounded font-medium whitespace-nowrap">
                        {location.state}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Clients */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display font-semibold text-2xl text-foreground mb-6 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-sasbio-green-health" />
              Nossos Clientes
            </h3>
            
            <p className="text-muted-foreground mb-8">
              Atendemos as principais instituições de saúde do Brasil com excelência e 
              compromisso com a qualidade.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {clients.map((client, index) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-border/50"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sasbio-blue-tech/10 to-sasbio-green-health/10 flex items-center justify-center mb-3">
                    <span className="text-sasbio-blue-tech font-display font-bold text-lg">
                      {client.charAt(0)}
                    </span>
                  </div>
                  <p className="font-medium text-foreground text-sm">{client}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
