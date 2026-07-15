import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AIAgentsSection from "@/components/AIAgentsSection";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AIAgentsSection />
      <PortfolioSection />

      <section className="bg-teal-500 py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
              Ready to grow with data, design and AI?
            </h2>
            <p className="text-slate-800/80 text-sm mt-1">
              Tell us about your business — get a custom strategy back within 48 hours.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white font-medium text-sm px-6 py-3 hover:bg-slate-800 transition-colors shrink-0"
          >
            Get a free proposal <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </main>
  );
}
