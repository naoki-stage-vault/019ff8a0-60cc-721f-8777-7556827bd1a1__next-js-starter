import { whatsappUrl } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Icon";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbeme por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-pine py-3.5 pl-4 pr-4 text-mist shadow-float transition-all duration-300 hover:bg-pine-deep sm:bottom-6 sm:right-6 sm:pr-4"
    >
      <WhatsAppIcon size={22} />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[220px] group-hover:pr-2 lg:inline-block">
        Escríbeme por WhatsApp
      </span>
    </a>
  );
}
