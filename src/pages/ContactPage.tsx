import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ContactSection } from "@/components/home/ContactSection";

const ContactPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-sasbio-green-health via-sasbio-blue-light to-sasbio-blue-tech">
        <div className="absolute inset-0 scientific-grid opacity-10" />
        <div className="absolute inset-0 molecular-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              Fale Conosco
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              Contato
            </h1>
            <p className="text-xl text-white/90">
              Estamos prontos para atender você
            </p>
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

export default ContactPage;
