import { createFileRoute } from "@tanstack/react-router";
import { Star, MapPin, Clock, Navigation, Mail, Phone } from "lucide-react";

import heroImage from "@/assets/hero-salon.jpg";
import { salonConfig, fullAddress } from "@/config/salonConfig";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { ContactForm } from "@/components/ContactForm";
import { WhatsappFloat } from "@/components/WhatsappFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${salonConfig.name} — Salão de Beleza em Icaraí, Niterói` },
      { name: "description", content: salonConfig.description },
      { property: "og:title", content: `${salonConfig.name} — ${salonConfig.slogan}` },
      { property: "og:description", content: salonConfig.description },
    ],
  }),
  component: Index,
});

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12 text-center">
      <p className="text-xs uppercase tracking-[0.35em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl text-primary sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-5 h-px w-16 bg-accent" />
    </div>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-accent">
              {salonConfig.address.district} · {salonConfig.address.city}
            </p>
            <h1 className="mt-5 font-display text-4xl leading-tight text-primary sm:text-5xl lg:text-6xl">
              {salonConfig.slogan}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              {salonConfig.description}
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3">
              <span className="font-display text-xl text-primary">
                {salonConfig.rating.score}
              </span>
              <span className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span className="text-xs text-muted-foreground">
                {salonConfig.rating.count} avaliações no Google
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-accent/40" />
            <img
              src={heroImage}
              alt={`Interior sofisticado do ${salonConfig.name}`}
              width={1600}
              height={1200}
              className="relative rounded-[2rem] object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle eyebrow="O que fazemos" title="Serviços" />
          <div className="grid gap-6 sm:grid-cols-2">
            {salonConfig.serviceCategories.map((cat) => (
              <article
                key={cat.title}
                className="rounded-2xl border border-border bg-card p-7 transition hover:border-accent/60 hover:shadow-lg"
              >
                <h3 className="font-display text-2xl text-primary">{cat.title}</h3>
                <div className="mt-5 space-y-3">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sm text-foreground">{item.name}</span>
                      <span className="whitespace-nowrap text-sm text-muted-foreground">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle eyebrow="Prova social" title="O que dizem nossas clientes" />
          <div className="mb-12 flex justify-center">
            <div className="flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-primary-foreground">
              <span className="font-display text-lg">{salonConfig.rating.score}</span>
              <span className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span className="text-xs tracking-wide">no {salonConfig.rating.source}</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {salonConfig.testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-7"
              >
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary font-display text-sm text-primary">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm text-primary">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">{t.service}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" />
          <Faq />
        </div>
      </section>

      {/* Localização */}
      <section id="localizacao" className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle eyebrow="Onde estamos" title="Localização e horários" />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="flex items-start gap-3 text-sm text-foreground">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                {fullAddress}
              </p>
              <div className="mt-7 space-y-2">
                <p className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-accent">
                  <Clock className="h-4 w-4" /> Horários
                </p>
                {salonConfig.hours.map((h) => (
                  <p
                    key={h.day}
                    className="flex justify-between border-b border-border/60 pb-2 text-sm text-muted-foreground last:border-0"
                  >
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </p>
                ))}
              </div>
              <a
                href={salonConfig.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                <Navigation className="h-4 w-4" />
                Abrir rota no Google Maps
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title={`Mapa — ${salonConfig.name}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`}
                loading="lazy"
                className="h-full min-h-[320px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle eyebrow="Fale conosco" title="Monte sua mensagem" />
          <div className="mb-10 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" /> {salonConfig.whatsapp.display}
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" /> {salonConfig.email}
            </span>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
      <WhatsappFloat />
    </div>
  );
}
