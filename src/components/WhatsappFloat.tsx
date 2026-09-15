import { salonConfig, whatsappLink } from "@/config/salonConfig";
import { WhatsappIcon } from "./icons";

export function WhatsappFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Agendar pelo WhatsApp ${salonConfig.whatsapp.display}`}
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] py-3 pl-4 pr-4 text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.45)] transition-all duration-300 hover:gap-3 hover:pr-6"
    >
      <WhatsappIcon className="h-7 w-7 shrink-0" />
      <span className="max-w-0 whitespace-nowrap text-sm font-medium tracking-wide opacity-0 transition-all duration-300 group-hover:max-w-[16rem] group-hover:opacity-100">
        Agende pelo WhatsApp
      </span>
    </a>
  );
}
