import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import PortfolioSection from "@/components/PortfolioSection";

export default function PortfolioPage() {
  return (
    <main>
      <Header />
      <section className="bg-[#0a1120] text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
            Results our clients can point to
          </h1>
          <p className="text-white/60 text-[15px]">
            Every project below links back to real keyword rankings, live URLs, and the
            achievements behind the numbers.
          </p>
        </div>
      </section>
      <PortfolioSection />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
