import { Header } from "@/components/marketing/header";
import { HeroSection } from "@/components/marketing/hero-section";
import { AppRegistrySection } from "@/components/marketing/app-registry-section";
import { UseCasesSection } from "@/components/marketing/use-cases-section";
import { FeaturesSection } from "@/components/marketing/features-section";
import { MoldableAgentSection } from "@/components/marketing/moldable-agent-section";
import { SecuritySection } from "@/components/marketing/security-section";
import { CtaSection } from "@/components/marketing/cta-section";
import { SiteFooter } from "@/components/marketing/site-footer";
import {
  OrganizationJsonLd,
  WebSiteJsonLd,
  SoftwareApplicationJsonLd,
} from "@/components/seo";

export default function MarketingPage() {
  return (
    <>
      {/* JSON-LD structured data for SEO */}
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <SoftwareApplicationJsonLd />

      <main className="min-h-screen bg-background text-foreground">
        <Header />
        <HeroSection />
        <div id="apps">
          <AppRegistrySection />
        </div>
        <div id="use-cases">
          <UseCasesSection />
        </div>
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="moldable-agent">
          <MoldableAgentSection />
        </div>
        <div id="security">
          <SecuritySection />
        </div>
        <CtaSection />
        <SiteFooter />
      </main>
    </>
  );
}
