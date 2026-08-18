import { whatsappUrl } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Icon";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbeme por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-pine text-mist shadow-float transition-all duration-300 hover:scale-105 hover:bg-pine-deep sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}
