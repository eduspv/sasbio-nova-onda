import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 molecular-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sasbio-green-health/10 text-sasbio-green-health text-sm font-medium mb-6">
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos prontos para atender suas necessidades em biossegurança.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {[
              { icon: Mail, label: "E-mail", value: "contato@sasbio.com.br" },
              { icon: Phone, label: "Telefone", value: "(11) 99999-9999" },
              { icon: MapPin, label: "Endereço", value: "São Paulo, SP - Brasil" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-sasbio-blue-tech to-sasbio-blue-light flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">{item.label}</p>
                  <p className="font-medium text-foreground">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-3xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nome</label>
                  <Input 
                    placeholder="Seu nome" 
                    required
                    className="bg-background border-border/50 focus:border-sasbio-blue-tech"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">E-mail</label>
                  <Input 
                    type="email" 
                    placeholder="seu@email.com" 
                    required
                    className="bg-background border-border/50 focus:border-sasbio-blue-tech"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Telefone</label>
                <Input 
                  placeholder="(00) 00000-0000" 
                  className="bg-background border-border/50 focus:border-sasbio-blue-tech"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Mensagem</label>
                <Textarea 
                  placeholder="Como podemos ajudar?" 
                  rows={4}
                  required
                  className="bg-background border-border/50 focus:border-sasbio-blue-tech resize-none"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                disabled={isSubmitting || isSubmitted}
                className="w-full pill-button glow-button bg-gradient-to-r from-sasbio-green-health to-sasbio-green-bright text-white border-0"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="mr-2 w-5 h-5" />
                    Enviado!
                  </>
                ) : isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Send className="mr-2 w-5 h-5" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
