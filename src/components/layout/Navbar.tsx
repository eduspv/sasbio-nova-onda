import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoSasbioGrandeSemFundo from "@/assets/logosasgrande-semfundo.png";


const navItems = [
  { label: "Home", href: "/" },
  { 
    label: "Serviços", 
    href: "/servicos",
    children: [
      { label: "Biodescontaminação", href: "/servicos/biodescontaminacao" },
      { label: "SASMUV", href: "/servicos/sasmuv" },
      { label: "Banho no Leito", href: "/servicos/banho-no-leito" },
      { label: "Saúde Mental", href: "/servicos/saude-mental" },
    ]
  },
  { label: "Quem Somos", href: "/sobre" },
  { label: "Notícias", href: "/noticias" },
  { label: "Seja um Franqueado", href: "/sejaumfranqueado" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
  ? "bg-gradient-to-r from-[#017DAE]/95 via-[#48A8AA]/95 to-[#2EB455]/95 backdrop-blur-xl shadow-lg border-b border-white/15"
  : "bg-transparent"

      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3"
            >
        <div className="w-32 h-32 flex items-center justify-center">
        <img
          src={logoSasbioGrandeSemFundo}
          alt="SASBIO"
          className="w-full h-full object-contain"
        />
      </div>        
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-1 ${
  isScrolled
    ? "text-white hover:bg-white/10"
    : "text-white/90 hover:text-white hover:bg-white/10"
}`}

                >
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 py-2 rounded-xl glass-card shadow-xl"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-foreground hover:bg-sasbio-blue-tech/10 hover:text-sasbio-blue-tech transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contato">
              <Button className="pill-button glow-button bg-gradient-to-r from-sasbio-green-health to-sasbio-green-bright text-white border-0 hover:opacity-90">
                Fale Conosco
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="block px-4 py-3 rounded-lg text-foreground font-medium hover:bg-muted transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-6 space-y-1 mt-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-sasbio-blue-tech transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contato" className="block pt-2">
                <Button className="w-full pill-button bg-gradient-to-r from-sasbio-green-health to-sasbio-green-bright text-white">
                  Fale Conosco
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
