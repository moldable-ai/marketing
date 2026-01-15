import { Header } from "@/components/marketing/header";
import { HeroSection } from "@/components/marketing/hero-section";
import { AppRegistrySection } from "@/components/marketing/app-registry-section";
import { FeaturesSection } from "@/components/marketing/features-section";
import { SecuritySection } from "@/components/marketing/security-section";
import { CtaSection } from "@/components/marketing/cta-section";
import { SiteFooter } from "@/components/marketing/site-footer";

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <div id="apps">
        <AppRegistrySection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="security">
        <SecuritySection />
      </div>
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
