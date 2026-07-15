import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import {
  Building2,
  TreePine,
  Waves,
  Dumbbell,
  Utensils,
  Sparkles,
  ShieldCheck,
  Car,
  Wifi,
  Phone,
  MessageCircle,
  Download,
  MapPin,
  Ruler,
  Home,
  Crown,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import heroAsset from "@/assets/hero.jpg.asset.json";
import interior1Asset from "@/assets/interior1.jpg.asset.json";
import amenity1Asset from "@/assets/amenity1.jpg.asset.json";
import lobbyAsset from "@/assets/lobby.jpg.asset.json";
import gardensAsset from "@/assets/gardens.jpg.asset.json";
import towerAsset from "@/assets/tower.jpg.asset.json";
import dlfLogo from "@/assets/dlf-logo.svg.asset.json";

const PHONE_DISPLAY = "+91 97735 53393";
const PHONE_TEL = "+919773553393";
const WHATSAPP_URL = "https://wa.me/919773553393";
const EMAIL = "akash@silverdomerealtors.com";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { property: "og:image", content: heroAsset.url },
      { name: "twitter:image", content: heroAsset.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const HEADER_NAV = [
  { label: "Overview", href: "#overview" },
  { label: "Amenities", href: "#amenities" },
  { label: "Floor Plans", href: "#floorplans" },
  { label: "Pricing", href: "#pricing" },
];

const FOOTER_NAV = [
  { label: "Overview", href: "#overview" },
  { label: "Highlights", href: "#highlights" },
  { label: "Amenities", href: "#amenities" },
  { label: "Master Plan", href: "#masterplan" },
  { label: "Floor Plans", href: "#floorplans" },
  { label: "Location", href: "#location" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container-lux flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-11 items-center justify-center rounded-md bg-white/95 px-3 py-1.5 shadow-sm">
            <img src={dlfLogo.url} alt="DLF" className="h-6 w-auto" />
          </div>
          <div className="leading-tight hidden sm:block">
            <div className="font-display text-base tracking-wide">Hamilton Court 2</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Gurugram</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {HEADER_NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild variant="default" className="rounded-full bg-primary text-primary-foreground hover:opacity-90 px-5">
            <a href="#enquire">Request EOI</a>
          </Button>
        </div>
        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden glass-dark border-t border-border">
          <div className="container-lux py-4 flex flex-col gap-3">
            {HEADER_NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 text-sm text-muted-foreground hover:text-primary">
                {n.label}
              </a>
            ))}
            <Button asChild className="rounded-full mt-2"><a href="#enquire" onClick={() => setOpen(false)}>Request EOI</a></Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 animate-hero-zoom">
        <img
          src={heroAsset.url}
          alt="DLF Hamilton Court 2 residential tower at twilight"
          className="h-full w-full object-cover"
          width={1920}
          height={1088}
        />
      </div>
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative z-10 flex min-h-screen items-end pb-20 pt-40">
        <div className="container-lux">
          <div className="max-w-3xl animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-[0.25em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              New Launch · Gurugram
            </div>
            <h1 className="font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
              A Rare Address, <br />
              <span className="gold-text italic">Reimagined.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground">
              DLF Hamilton Court 2 — an ultra-luxury enclave of 4.5 BHK residences and sky-penthouses,
              set across 12.5 acres in the heart of Gurugram.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:opacity-90 h-12 px-7 shadow-[var(--shadow-gold)]">
                <a href="#enquire">Request EOI</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 gold-border bg-transparent hover:bg-primary/10">
                <a href="#enquire"><Download className="mr-2 h-4 w-4" /> Download Brochure</a>
              </Button>
            </div>
            <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { k: "Land Parcel", v: "12.5 Acres" },
                { k: "Towers", v: "6 – 7" },
                { k: "Residences", v: "~450" },
                { k: "Config", v: "4.5 BHK" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{s.k}</dt>
                  <dd className="mt-1 font-display text-2xl">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <a href="#overview" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce z-10" aria-label="Scroll">
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
}

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="text-[10px] uppercase tracking-[0.35em] text-primary">{eyebrow}</div>
      <div className="hairline my-4 mx-auto w-24" />
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">{title}</h2>
      {subtitle && <p className="mt-5 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function Overview() {
  return (
    <section id="overview" className="relative py-24 md:py-32">
      <div className="container-lux">
        <SectionTitle eyebrow="The Project" title="An enclave curated for the few." />
        <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-luxe)]">
            <img src={interior1Asset.url} alt="Interior of a residence at DLF Hamilton Court 2" className="h-full w-full object-cover" loading="lazy" width={1600} height={1067} />
          </div>
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Set behind private gates in Gurugram's most sought-after corridor, DLF Hamilton Court 2 is a
              limited collection of expansive 4.5 BHK residences and sky-penthouses. Each home is engineered
              for scale — approx. <span className="text-foreground">5,500 sq ft</span> of living, with penthouses
              extending to <span className="text-foreground">8,500 sq ft</span>.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Six to seven sculpted towers rise from twelve and a half acres of landscaped gardens, water bodies
              and low-density living — an address that speaks softly, yet unmistakably.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: Ruler, k: "Apt Size", v: "≈ 5,500 sq ft" },
                { icon: Home, k: "Penthouses", v: "7,500 – 8,500 sq ft" },
                { icon: MapPin, k: "Location", v: "Gurugram" },
                { icon: Building2, k: "Density", v: "Low-rise Luxury" },
              ].map((s) => (
                <div key={s.k} className="glass rounded-2xl p-4">
                  <s.icon className="h-5 w-5 text-primary" />
                  <div className="mt-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.k}</div>
                  <div className="font-display text-lg">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const HIGHLIGHTS = [
  { icon: Crown, title: "Ultra-Luxury Segment", desc: "Positioned amongst DLF's most exclusive residences to date." },
  { icon: TreePine, title: "12.5 Acres of Green", desc: "Sprawling landscaped gardens, water bodies and quiet walks." },
  { icon: Building2, title: "6 – 7 Iconic Towers", desc: "Sculpted architecture with panoramic city and green views." },
  { icon: Ruler, title: "Expansive 4.5 BHK", desc: "≈ 5,500 sq ft of thoughtfully proportioned living space." },
  { icon: Home, title: "Sky Penthouses", desc: "Rare 7,500 – 8,500 sq ft penthouses at the crown of the towers." },
  { icon: ShieldCheck, title: "Private, Gated Enclave", desc: "Multi-tier security, private drop-off and concierge." },
];

function Highlights() {
  return (
    <section id="highlights" className="relative py-24 md:py-32 bg-[oklch(0.12_0.015_260)]">
      <div className="container-lux">
        <SectionTitle eyebrow="Key Highlights" title="Details that define the address." />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((h) => (
            <div key={h.title} className="group relative overflow-hidden rounded-2xl glass p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-gold)]">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <h.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-5 font-display text-2xl">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const AMENITIES = [
  { icon: Waves, title: "Infinity Pool" },
  { icon: Dumbbell, title: "State-of-Art Gym" },
  { icon: Sparkles, title: "Spa & Wellness" },
  { icon: Utensils, title: "Signature Dining" },
  { icon: TreePine, title: "Landscaped Gardens" },
  { icon: ShieldCheck, title: "24×7 Security" },
  { icon: Car, title: "Valet & Concierge" },
  { icon: Wifi, title: "Smart Home Ready" },
];

function Amenities() {
  return (
    <section id="amenities" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40">
        <img src={amenity1Asset.url} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div className="container-lux">
        <SectionTitle eyebrow="Premium Amenities" title="A private world, curated." subtitle="Every amenity has been chosen to reflect a rarefied way of life." />
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {AMENITIES.map((a) => (
            <div key={a.title} className="group flex flex-col items-center justify-center rounded-2xl glass p-8 text-center transition-all hover:border-primary/50 hover:-translate-y-1">
              <div className="grid h-14 w-14 place-items-center rounded-full gold-border bg-background/40 mb-4 group-hover:bg-primary/10 transition-colors">
                <a.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="font-display text-lg">{a.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MasterPlan() {
  return (
    <section id="masterplan" className="relative py-24 md:py-32 bg-[oklch(0.12_0.015_260)]">
      <div className="container-lux">
        <SectionTitle eyebrow="Master Plan" title="Twelve and a half acres, thoughtfully composed." />
        <div className="mt-16 relative overflow-hidden rounded-3xl gold-border shadow-[var(--shadow-luxe)]">
          <div className="relative aspect-[16/9]">
            <img src={gardensAsset.url} alt="Master plan preview — DLF Hamilton Court 2 landscape" className="absolute inset-0 h-full w-full object-cover opacity-60" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute inset-0 grid place-items-center text-center px-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-primary">Preview</div>
                <div className="mt-3 font-display text-3xl md:text-5xl">Detailed master plan on request.</div>
                <p className="mt-4 max-w-xl mx-auto text-sm text-muted-foreground">
                  Share your details to receive the confidential master plan and site walkthrough.
                </p>
                <Button asChild className="mt-6 rounded-full bg-primary text-primary-foreground"><a href="#enquire">Request Master Plan</a></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FLOORPLANS = [
  { type: "4.5 BHK Residence", size: "≈ 5,500 sq ft", detail: "Signature layout with private lift lobby, chef's kitchen, staff quarters." },
  { type: "4.5 BHK Corner", size: "≈ 5,500 sq ft", detail: "Twin-aspect corner unit with wrap-around balconies and green views." },
  { type: "Sky Penthouse", size: "7,500 – 8,500 sq ft", detail: "Duplex penthouse with private terrace, plunge pool and skyline vistas." },
];

function FloorPlans() {
  return (
    <section id="floorplans" className="relative py-24 md:py-32">
      <div className="container-lux">
        <SectionTitle eyebrow="Floor Plans" title="Three ways to live grandly." />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {FLOORPLANS.map((f, i) => (
            <div key={f.type} className="group relative overflow-hidden rounded-3xl glass p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-gold)]">
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary">Type 0{i + 1}</div>
              <h3 className="mt-3 font-display text-3xl">{f.type}</h3>
              <div className="mt-2 font-display text-xl gold-text">{f.size}</div>
              <p className="mt-4 text-sm text-muted-foreground">{f.detail}</p>
              <div className="mt-8 aspect-[4/3] rounded-2xl border border-dashed border-primary/30 bg-background/40 grid place-items-center">
                <div className="text-center text-muted-foreground text-xs">
                  <Ruler className="mx-auto h-6 w-6 text-primary/60 mb-2" />
                  Floor plan available on request
                </div>
              </div>
              <Button asChild variant="outline" className="mt-6 w-full rounded-full gold-border bg-transparent hover:bg-primary/10">
                <a href="#enquire">Request This Plan</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const LOCATION = [
  { time: "5 min", place: "Golf Course Road" },
  { time: "10 min", place: "Cyber Hub & DLF Cyber City" },
  { time: "15 min", place: "IGI Airport (via Dwarka Expressway)" },
  { time: "5 min", place: "Leading International Schools" },
  { time: "10 min", place: "Premium Hospitals — Medanta, Fortis" },
  { time: "8 min", place: "Ambience & DLF Emporio Mall" },
];

function Location() {
  return (
    <section id="location" className="relative py-24 md:py-32 bg-[oklch(0.12_0.015_260)]">
      <div className="container-lux">
        <SectionTitle eyebrow="Location Advantages" title="At the centre of everything that matters." />
        <div className="mt-16 mx-auto max-w-3xl">
          <ol className="relative border-l border-primary/30 pl-8 space-y-8">
            {LOCATION.map((l) => (
              <li key={l.place} className="relative">
                <span className="absolute -left-[41px] grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground text-[10px] font-semibold">
                  <MapPin className="h-3 w-3" />
                </span>
                <div className="glass rounded-2xl p-5 flex items-center justify-between gap-4">
                  <div className="font-display text-xl">{l.place}</div>
                  <div className="text-sm gold-text font-medium shrink-0">{l.time}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const PRICING = [
  { type: "4.5 BHK Residence", size: "≈ 5,500 sq ft", price: "₹27.50 Cr* + GST" },
  { type: "4.5 BHK Corner", size: "≈ 5,500 sq ft", price: "On Request" },
  { type: "Sky Penthouse", size: "7,500 – 8,500 sq ft", price: "On Request" },
];

function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="container-lux">
        <SectionTitle eyebrow="Indicative Pricing" title="Positioned at ≈ ₹50,000 per sq ft." subtitle="Pricing is indicative and subject to change at the sole discretion of the developer." />
        <div className="mt-16 overflow-hidden rounded-3xl glass shadow-[var(--shadow-luxe)]">
          <div className="grid grid-cols-3 border-b border-border bg-background/40 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <div className="p-5">Residence</div>
            <div className="p-5">Approx. Size</div>
            <div className="p-5 text-right">Indicative Price</div>
          </div>
          {PRICING.map((p) => (
            <div key={p.type} className="grid grid-cols-3 items-center border-b border-border last:border-b-0 transition-colors hover:bg-primary/5">
              <div className="p-5 font-display text-lg md:text-xl">{p.type}</div>
              <div className="p-5 text-muted-foreground text-sm md:text-base">{p.size}</div>
              <div className="p-5 text-right font-display text-lg md:text-2xl gold-text">{p.price}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground text-center max-w-2xl mx-auto">
          * Indicative price for a ≈ 5,500 sq ft apartment at approximately ₹50,000 per sq ft, exclusive of GST and other statutory charges.
          All prices, sizes and configurations are tentative and subject to change without notice.
        </p>
      </div>
    </section>
  );
}

const GALLERY = [
  { src: heroAsset.url, alt: "Tower exterior at twilight" },
  { src: interior1Asset.url, alt: "Residence interior" },
  { src: lobbyAsset.url, alt: "Grand lobby" },
  { src: amenity1Asset.url, alt: "Rooftop infinity pool" },
  { src: gardensAsset.url, alt: "Landscaped gardens" },
  { src: towerAsset.url, alt: "Tower detail" },
];

function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-[oklch(0.12_0.015_260)]">
      <div className="container-lux">
        <SectionTitle eyebrow="Gallery" title="A visual preview." />
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {GALLERY.map((g, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl gold-border ${i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-[4/3]" : "aspect-square"}`}
            >
              <img src={g.src} alt={g.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "Where is DLF Hamilton Court 2 located?", a: "The project is located in Gurugram. Detailed sector and address will be shared with confirmed enquiries." },
  { q: "What is the total land area?", a: "The project is planned over approximately 12.5 acres of land, offering a low-density living experience." },
  { q: "How many towers and apartments?", a: "The development is planned as 6–7 towers with approximately 450 residences in total." },
  { q: "What configurations are available?", a: "The primary configuration is 4.5 BHK of approximately 5,500 sq ft, with select sky-penthouses ranging 7,500 – 8,500 sq ft." },
  { q: "What is the indicative price?", a: "Indicative pricing is around ₹50,000 per sq ft, i.e. approximately ₹27.50 Cr + GST for a 5,500 sq ft residence. Prices are tentative and subject to change." },
  { q: "When will the project launch?", a: "The project is in the pre-launch phase. Expressions of Interest are being accepted on a priority basis." },
];

function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="container-lux max-w-3xl">
        <SectionTitle eyebrow="FAQ" title="Frequently asked questions." />
        <Accordion type="single" collapsible className="mt-12">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="glass mb-3 rounded-2xl border-none px-6">
              <AccordionTrigger className="text-left font-display text-lg hover:no-underline hover:text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function LeadForm() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const msg = String(data.get("msg") ?? "");
    const subject = encodeURIComponent(`EOI — DLF Hamilton Court 2 — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${msg}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Thank you — our relationship manager will reach out shortly.");
    }, 900);
  };
  return (
    <section id="enquire" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={lobbyAsset.url} alt="" className="h-full w-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
      <div className="container-lux">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-primary">Register Your Interest</div>
            <div className="hairline my-4 w-24" />
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Be amongst the first to receive the <span className="gold-text italic">private preview</span>.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-lg">
              Share your details and our relationship manager will reach out with the confidential brochure,
              floor plans, master plan and priority-EOI details.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm hover:border-primary transition">
                <Phone className="h-4 w-4 text-primary" /> {PHONE_DISPLAY}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm hover:border-primary transition">
                <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp
              </a>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm hover:border-primary transition">
                <span className="text-primary">✉</span> {EMAIL}
              </a>
            </div>
          </div>
          <form onSubmit={onSubmit} className="glass rounded-3xl p-8 shadow-[var(--shadow-luxe)]">
            <div className="grid gap-5">
              <div>
                <Label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Full Name</Label>
                <Input id="name" required className="mt-2 h-12 bg-background/40 border-border" placeholder="Your name" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</Label>
                  <Input id="email" type="email" required className="mt-2 h-12 bg-background/40 border-border" placeholder="you@email.com" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Phone</Label>
                  <Input id="phone" type="tel" required className="mt-2 h-12 bg-background/40 border-border" placeholder="+91" />
                </div>
              </div>
              <div>
                <Label htmlFor="msg" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</Label>
                <Textarea id="msg" rows={3} className="mt-2 bg-background/40 border-border" placeholder="Tell us your preference — apartment, corner unit or penthouse." />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button type="submit" disabled={submitting} size="lg" className="flex-1 rounded-full bg-primary text-primary-foreground hover:opacity-90 h-12 shadow-[var(--shadow-gold)]">
                  {submitting ? "Submitting…" : "Request EOI"}
                </Button>
                <Button type="submit" disabled={submitting} size="lg" variant="outline" className="flex-1 rounded-full gold-border bg-transparent hover:bg-primary/10 h-12">
                  <Download className="mr-2 h-4 w-4" /> Download Brochure
                </Button>
              </div>
              <p className="text-[11px] text-muted-foreground">
                By submitting, you consent to be contacted by our authorised channel partner regarding this project.
                Pricing and inventory are tentative and subject to change.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.6_0.16_150)] text-white shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label="Call now"
        className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-gold)] hover:scale-110 transition-transform"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border bg-[oklch(0.1_0.01_260)] py-14">
      <div className="container-lux">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 items-center justify-center rounded-md bg-white/95 px-3 py-1.5">
                <img src={dlfLogo.url} alt="DLF" className="h-6 w-auto" />
              </div>
              <div>
                <div className="font-display text-lg">Hamilton Court 2</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Gurugram</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-sm">
              An ultra-luxury residential enclave. This microsite is presented by an authorised channel partner.
            </p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary">Contact</div>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <div><a href={`tel:${PHONE_TEL}`} className="hover:text-primary">{PHONE_DISPLAY}</a></div>
              <div><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">WhatsApp: {PHONE_DISPLAY}</a></div>
              <div><a href={`mailto:${EMAIL}`} className="hover:text-primary">{EMAIL}</a></div>
              <div>Gurugram, Haryana, India</div>
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary">Explore</div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              {FOOTER_NAV.map((n) => (
                <a key={n.href} href={n.href} className="hover:text-primary transition-colors">{n.label}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="hairline my-10" />
        <p className="text-[11px] leading-relaxed text-muted-foreground max-w-4xl">
          <span className="text-foreground/80 font-medium">Disclaimer:</span> All content on this website is
          for informational purposes only. All details, specifications, plans, dimensions, prices, images,
          amenities and configurations mentioned herein are indicative and tentative in nature and are subject
          to change without prior notice at the sole discretion of the developer. This is not a legal offer or
          commitment and does not form part of any contract. The developer reserves the right to alter or
          modify any plans, specifications or elevations without notice. This website is operated by an
          authorised channel partner and is not the official website of the developer.
        </p>
        <div className="mt-6 text-xs text-muted-foreground">© {new Date().getFullYear()} DLF Hamilton Court 2 microsite. All rights reserved.</div>
      </div>
    </footer>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Overview />
        <Highlights />
        <Amenities />
        <MasterPlan />
        <FloorPlans />
        <Location />
        <Pricing />
        <Gallery />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
      <FloatingActions />
      <Toaster position="top-center" />
    </div>
  );
}
