import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import logo from "@/assets/logosasgrande-semfundo.png";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
  {/* imagem de fundo */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/about/about-hero.jpg')" }}
  />

  {/* overlay gradiente + texturas */}
  <div className="absolute inset-0 bg-gradient-to-br from-sasbio-blue-tech/35 via-sasbio-blue-light/35 to-sasbio-green-health/35" />
  <div className="absolute inset-0 scientific-grid opacity-10" />
  <div className="absolute inset-0 molecular-pattern opacity-20" />

  {/* conteúdo */}
  <div className="container mx-auto px-4 relative pt-24">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto"
    >
      <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-0">
        Quem Somos
      </span>

      <img src={logo} alt="SASBIO" className="mx-auto mb-0 w-80" />
    </motion.div>
  </div>
</section>


      {/* Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Nossa História
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4 max-w-none">
                <p>
                  A história da <strong>SASBIO</strong> nasce de uma visão que antecedeu o seu tempo.
                </p>

                <p>
                  Fundada em <strong>2015</strong>, a <strong>SAS Representações e Comércio LTDA</strong> surge a partir do espírito 
                  empreendedor de <strong>Ricardo Marques</strong> e <strong>Simone Azevedo Santos</strong>, com o propósito inicial
                  de atuar na representação de soluções inovadoras voltadas aos setores de <strong>saúde, educação, tecnologia e inovação</strong>.
                </p>

                <p>
                  Mais do que um projeto empresarial, a SAS sempre carregou um significado pessoal:
                  seu nome homenageia <strong>Simone</strong> — a base <strong>sólida, estratégica e operacional</strong> do negócio.
                </p>

                <p>
                  O ponto de inflexão veio quando <strong>Ricardo Marques</strong>, à época exercendo função estratégica 
                  no <strong>Arquivo Nacional</strong>, foi apresentado a uma tecnologia voltada ao 
                  <strong>controle microbiano</strong> e à <strong>mitigação de riscos em ambientes insalubres</strong>.
                </p>

                <p>
                  A proposta, inicialmente direcionada ao <strong>sistema prisional brasileiro</strong>, despertou uma 
                  percepção maior: a necessidade urgente de transformar ambientes coletivos em 
                  <strong>espaços seguros, saudáveis e protegidos contra agentes patogênicos</strong>.
                </p>

                <p>
                  Antes mesmo da pandemia, Marques já defendia um novo paradigma — o da 
                  <strong>biossegurança como elemento essencial à saúde pública e à qualidade de vida</strong>.
                </p>

                <p>
                  Com a chegada da pandemia, o mundo confirmou aquilo que já era convicção:
                  <strong>ambientes seguros salvam vidas</strong>.
                </p>

                <p>
                  É nesse contexto que a SAS evolui e se consolida como <strong>SASBIO</strong>, uma marca que se torna 
                  <strong>referência nacional em biossegurança, sanitização e inteligência sanitária</strong>.
                </p>

                <p>
                  A empresa passa a atuar de forma estratégica na proteção de 
                  <strong>ambientes públicos e privados</strong>, contribuindo diretamente para a 
                  <strong>redução de riscos biológicos</strong> e promoção da <strong>saúde coletiva</strong>.
                </p>

                <div>
                  <p>
                    A SASBIO estrutura sua atuação com base em <strong>três pilares fundamentais</strong>:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Tecnologia aplicada à biossegurança:</strong> soluções avançadas de 
                      sanitização e biodescontaminação com eficácia comprovada.
                    </li>
                    <li>
                      <strong>Inteligência sanitária:</strong> diagnóstico, mapeamento de riscos, 
                      protocolos operacionais e monitoramento contínuo.
                    </li>
                    <li>
                      <strong>Inovação e pesquisa:</strong> desenvolvimento de novas metodologias, 
                      produtos e projetos voltados à <strong>biotecnologia</strong> e <strong>expansão internacional</strong>.
                    </li>
                  </ul>
                </div>

                <p>
                  Enquanto <strong>Ricardo Marques</strong> lidera a visão <strong>estratégica, institucional e de expansão</strong>, 
                  <strong>Simone Azevedo Santos</strong> assume papel essencial na sustentação da operação, conduzindo 
                  com excelência o <strong>back office</strong>, a <strong>gestão administrativa, financeira e de pessoas</strong> — 
                  garantindo <strong>solidez, governança e crescimento estruturado</strong>.
                </p>

                <p>
                  Hoje, a <strong>SASBIO</strong> se posiciona como uma empresa que vai além da prestação de serviços:
                  ela entrega <strong>segurança, prevenção e qualidade de vida</strong>.
                </p>

                <p>
                  Seus serviços impactam diretamente a saúde das pessoas, promovendo 
                  <strong>ambientes mais seguros</strong> em <strong>hospitais, escolas, órgãos públicos, empresas</strong> 
                  e espaços de grande circulação.
                </p>

                <p>
                  Preparada para o futuro, a SASBIO avança na implantação de 
                  <strong>centros de pesquisa e desenvolvimento em biotecnologia</strong>, na 
                  <strong>expansão nacional e internacional</strong>, e na estruturação de 
                  <strong>modelos escaláveis</strong> como franquias e soluções integradas.
                </p>

                <p>
                  Mais do que uma empresa, a SASBIO representa uma causa:
                </p>

                <p className="font-semibold text-foreground">
                  proteger vidas por meio da ciência, da inovação e da responsabilidade sanitária.
                </p>
              </div>
            </motion.div>

            {/* Download Section */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-card rounded-3xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sasbio-blue-tech to-sasbio-blue-light flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Release Institucional
                </h3>
                <p className="text-muted-foreground mb-6">
                  Baixe nosso release institucional completo com todas as informações 
                  sobre a SASBIO, nossos serviços e diferenciais.
                </p>
                
                <Button
                  asChild
                  size="lg"
                  className="pill-button glow-button bg-gradient-to-r from-sasbio-green-health to-sasbio-green-bright text-white border-0"
                >
                  <a
                    href="/docs/release-institucional-sasbio.pdf"
                    download="Release-Institucional-SASBIO.pdf"
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Baixar PDF
                  </a>
                </Button>
              </div>

              {/* Values */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { title: "Missão", text: "Promover ambientes seguros através da inovação" },
                  { title: "Visão", text: "Ser referência nacional em biossegurança" },
                  { title: "Valores", text: "Ética, qualidade, inovação e humanização" },
                  { title: "Propósito", text: "Transformar a saúde através da ciência" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-muted/50 rounded-xl"
                  >
                    <h4 className="font-display font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
