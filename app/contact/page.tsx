import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import ProposalForm from "@/components/ProposalForm";
import { MessageCircle, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      <Header />
      <section className="bg-[#0a1120] text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
            Get a free proposal
          </h1>
          <p className="text-white/60 text-[15px]">
            Tell us about your business and goals — we&apos;ll get back within 48 hours with a
            custom plan.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <ProposalForm />

          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-teal-600" />
                <span className="text-sm font-medium text-slate-900">Email</span>
              </div>
              <p className="text-sm text-slate-500">hello@pajeeseo.com</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-4 h-4 text-teal-600" />
                <span className="text-sm font-medium text-slate-900">Phone</span>
              </div>
              <p className="text-sm text-slate-500">+92 300 0000000</p>
            </div>
            <a
              href="https://wa.me/00000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 p-5 hover:bg-[#25D366]/15 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">Chat on WhatsApp</p>
                <p className="text-[12px] text-slate-500">Fastest response for local clients</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </main>
  );
}
