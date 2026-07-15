import { MessageCircle } from "lucide-react";

export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/00000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white shadow-lg px-4 py-3 hover:scale-105 transition-transform"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-medium hidden sm:inline">Chat with us</span>
    </a>
  );
}
