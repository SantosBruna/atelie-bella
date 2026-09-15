import { salonConfig, fullAddress } from "@/config/salonConfig";
import { InstagramIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-accent">{salonConfig.name}</p>
          <p className="mt-2 text-sm text-primary-foreground/75">{salonConfig.slogan}</p>
          <a
            href={salonConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-primary-foreground transition hover:border-accent hover:text-accent"
          >
            <InstagramIcon className="h-4 w-4" />
            {salonConfig.instagram.handle}
          </a>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-accent">Contato</p>
          <p className="text-sm text-primary-foreground/85">{salonConfig.whatsapp.display}</p>
          <p className="text-sm text-primary-foreground/85">{salonConfig.email}</p>
          <p className="mt-2 text-sm text-primary-foreground/75">{fullAddress}</p>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-accent">Horários</p>
          {salonConfig.hours.map((h) => (
            <p key={h.day} className="text-sm text-primary-foreground/85">
              {h.day}: {h.time}
            </p>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} {salonConfig.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
