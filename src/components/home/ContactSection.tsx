import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Send,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  CheckCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha nome, e-mail e mensagem.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const destinatario = "contato@sasbio.com.br";

    const assunto = `Novo contato do site - ${formData.name}`;

    const corpo =
      `Nome: ${formData.name}\n` +
      `E-mail: ${formData.email}\n` +
      `Telefone: ${formData.phone || "-"}\n\n` +
      `Mensagem:\n${formData.message}`;

    const gmailLink =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(destinatario)}` +
      `&su=${encodeURIComponent(assunto)}` +
      `&body=${encodeURIComponent(corpo)}`;

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Abrindo o Gmail…",
      description: "Revise a mensagem e clique em enviar.",
    });

    window.open(gmailLink, "_blank");

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 molecular-pattern opacity-20" />

      <div className="container mx-auto px-4 relative">
        {/* HEADER */}
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

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* ================= LEFT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Email */}
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contato@sasbio.com.br"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3 }}
              className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-sasbio-green-health/15 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-sasbio-green-health" />
              </div>

              <div>
                <p className="text-muted-foreground text-sm mb-1">E-mail</p>
                <p className="font-medium text-foreground">
                  contato@sasbio.com.br
                </p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+556193282424"
              whileHover={{ y: -3 }}
              className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-sasbio-green-health/15 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-sasbio-green-health" />
              </div>

              <div>
                <p className="text-muted-foreground text-sm mb-1">Telefone</p>
                <p className="font-medium text-foreground">(61) 9328-2424</p>
              </div>
            </motion.a>

            {/* Social */}
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50">
              <p className="text-muted-foreground text-sm mb-4">
                Redes sociais
              </p>

              <div className="grid grid-cols-3 gap-3">
                <motion.a
                  href="https://www.instagram.com/sasbio_saude"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="flex items-center justify-center gap-2 rounded-xl bg-sasbio-green-health/10 hover:bg-sasbio-green-health/20 transition-colors py-3"
                >
                  <Instagram className="w-5 h-5 text-sasbio-green-health" />
                  <span className="hidden sm:inline text-sm font-medium text-foreground">
                    Instagram
                  </span>
                </motion.a>

                <motion.a
                  href="https://www.facebook.com/profile.php?id=61572245032917"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="flex items-center justify-center gap-2 rounded-xl bg-sasbio-green-health/10 hover:bg-sasbio-green-health/20 transition-colors py-3"
                >
                  <Facebook className="w-5 h-5 text-sasbio-green-health" />
                  <span className="hidden sm:inline text-sm font-medium text-foreground">
                    Facebook
                  </span>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/company/sasbio-especializadas-em-saúde-de-alta-performance/posts/?feedView=all"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="flex items-center justify-center gap-2 rounded-xl bg-sasbio-green-health/10 hover:bg-sasbio-green-health/20 transition-colors py-3"
                >
                  <Linkedin className="w-5 h-5 text-sasbio-green-health" />
                  <span className="hidden sm:inline text-sm font-medium text-foreground">
                    LinkedIn
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-card p-8 rounded-3xl shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Seu nome"
                  required
                  value={formData.name}
                  onChange={handleChange("name")}
                />

                <Input
                  type="email"
                  placeholder="seu@email.com"
                  required
                  value={formData.email}
                  onChange={handleChange("email")}
                />
              </div>

              <Input
                placeholder="(00) 00000-0000"
                value={formData.phone}
                onChange={handleChange("phone")}
              />

              <Textarea
                placeholder="Como podemos ajudar?"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange("message")}
              />

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