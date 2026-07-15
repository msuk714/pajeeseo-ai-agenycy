import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function PlaceholderPage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <main>
      <Header />
      <section className="bg-[#0a1120] text-white py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">{title}</h1>
          <p className="text-white/60 text-[15px] leading-relaxed">{description}</p>
          <p className="text-white/30 text-[12px] mt-8">
            This page follows the same design system as the homepage — full layout coming in the
            next design pass.
          </p>
        </div>
      </section>
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
