import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import logoSasbio from "@/assets/logosasgrande-semfundo.png"; // ✅ ajuste o caminho se necessário

const footerLinks = {
  servicos: [
    { label: "Biodescontaminação", href: "/servicos/biodescontaminacao" },
    { label: "SASMUV", href: "/servicos/sasmuv" },
    { label: "Banho no Leito", href: "/servicos/banho-no-leito" },
    { label: "Saúde Mental", href: "/servicos/saude-mental" },
  ],
  empresa: [
    { label: "Quem Somos", href: "/sobre" },
    { label: "Notícias", href: "/noticias" },
    { label: "Franquias", href: "/#franquias" },
    { label: "Contato", href: "/contato" },
  ],
};

const socialLinks = [
  { Icon: Linkedin, href: "https://www.linkedin.com/company/sasbio-especializadas-em-saúde-de-alta-performance/posts/?feedView=all", label: "LinkedIn" },
  { Icon: Instagram, href: "https://www.instagram.com/sasbio_saude", label: "Instagram" },
  { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61572245032917", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-sasbio-blue-tech via-sasbio-blue-light to-sasbio-green-health text-white overflow-hidden">
      {/* Scientific Pattern */}
      <div className="absolute inset-0 scientific-grid opacity-10" />
      <div className="absolute inset-0 molecular-pattern opacity-20" />

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
  <div className="w-40 h-40 flex items-center justify-start">
    <img
      src={logoSasbio}
      alt="SASBIO"
      className="w-full h-full object-contain"
    />
  </div>
</div>

            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Inovação em biossegurança e saúde. Soluções científicas para ambientes seguros e saudáveis.
            </p>
          </motion.div>

          {/* Serviços */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display font-semibold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Empresa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display font-semibold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-display font-semibold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-sasbio-green-bright flex-shrink-0 mt-0.5" />
                <span className="text-white/70">Brasília - DF, Brasil</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-sasbio-green-bright flex-shrink-0" />
                <span className="text-white/70">(61) 9328-2424</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-sasbio-green-bright flex-shrink-0" />
                <span className="text-white/70">contato@sasbio.com.br</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} SASBIO. Todos os direitos reservados.
          </p>
         
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
        </motion.div>
      </div>
    </footer>
  );
}
