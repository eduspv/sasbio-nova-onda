import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { TeamSection } from "@/components/home/TeamSection";
import { FranchiseSection } from "@/components/home/FranchiseSection";
import { LocationsSection } from "@/components/home/LocationsSection";
import { ContactSection } from "@/components/home/ContactSection";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <BenefitsSection />
      <TeamSection />
      <FranchiseSection />
      <LocationsSection />
      <ContactSection />
    </Layout>
  );
};

export default HomePage;
