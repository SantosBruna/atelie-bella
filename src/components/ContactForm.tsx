import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { salonConfig, whatsappLink } from "@/config/salonConfig";
import { WhatsappIcon } from "./icons";

const allServices = salonConfig.serviceCategories.flatMap((c) =>
  c.items.map((i) => `${c.title} — ${i.name}`),
);

export function ContactForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; service?: string }>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: { name?: string; service?: string } = {};
    if (name.trim().length < 2) next.name = "Por favor, informe seu nome.";
    if (!service) next.service = "Escolha o serviço desejado.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const text = `Olá, ${salonConfig.name}! Meu nome é ${name.trim()}. Gostaria de agendar: ${service}.${
      message.trim() ? ` Observação: ${message.trim()}` : ""
    }`;
    setSent(true);
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-7 shadow-sm"
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-primary">
            Seu nome
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setSent(false);
            }}
            placeholder="Como podemos te chamar?"
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent"
          />
          {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="service" className="mb-2 block text-sm text-primary">
            Serviço desejado
          </label>
          <select
            id="service"
            value={service}
            onChange={(e) => {
              setService(e.target.value);
              setSent(false);
            }}
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent"
          >
            <option value="">Selecione uma opção</option>
            {allServices.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && <p className="mt-1.5 text-xs text-destructive">{errors.service}</p>}
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm text-primary">
            Observações (opcional)
          </label>
          <textarea
            id="message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Dias e horários de preferência, dúvidas..."
            className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent"
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition hover:bg-accent"
        >
          <WhatsappIcon className="h-4 w-4" />
          Enviar mensagem no WhatsApp
        </button>

        {sent && (
          <p className="flex items-center justify-center gap-2 text-sm text-accent">
            <CheckCircle2 className="h-4 w-4" />
            Mensagem pronta! Continue a conversa no WhatsApp.
          </p>
        )}
      </div>
    </form>
  );
}
