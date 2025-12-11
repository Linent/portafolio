import DefaultLayout from "@/layouts/default";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import SkillsSection from "@/components/SkillsSection";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <HeroSection  />
      <ServicesSection />
      <PortfolioSection />
      <SkillsSection />
      <ContactSection />
    </DefaultLayout>
  );
}
