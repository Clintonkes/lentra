import { Link } from "react-router-dom";
import { ArrowRight, Award, BadgeCheck, CalendarCheck, Clock, Leaf, Phone, ShieldCheck, Sprout, Star, ThumbsUp } from "lucide-react";
import Photo from "@/components/Photo";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { SIZES, pageImages } from "@/config/images";
import { services, site, testimonials } from "@/config/site";

const stats = [
  { value: "12+", label: "Years in San Antonio" },
  { value: "500+", label: "Properties cared for" },
  { value: "4.9", label: "Average review rating" },
  { value: "24h", label: "Quote turnaround" },
];

const reasons = [
  { icon: Clock, title: "Always on time", text: "We show up on the day we promise, every visit, and let you know when we are done." },
  { icon: Award, title: "Professional quality", text: "Trained crews and commercial grade equipment for results you can see from the curb." },
  { icon: ShieldCheck, title: "Licensed and insured", text: "Full liability coverage, so your property is protected while we work." },
  { icon: ThumbsUp, title: "Satisfaction guaranteed", text: "Not happy with a visit? Tell us and we will come back and make it right." },
  { icon: Sprout, title: "Earth friendly care", text: "Practices that keep your lawn healthy and stay safe for children and pets." },
  { icon: CalendarCheck, title: "Free estimates", text: "Clear, written pricing tailored to your property with no hidden fees." },
];

const steps = [
  { title: "Request a quote", text: "Fill out the short form or give us a call. It takes about two minutes." },
  { title: "Get your plan", text: "We review your property and send a clear estimate within one business day." },
  { title: "Enjoy your lawn", text: "Our crew arrives on schedule and leaves your yard looking its very best." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-evergreen-950 pb-16 pt-32 md:items-center md:pb-24">
        <div className="absolute inset-0">
          <Photo
            src={pageImages.home.hero}
            sizes={SIZES.full}
            alt="Freshly striped front lawn of a San Antonio home"
            priority
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-evergreen-950/95 via-evergreen-950/75 to-evergreen-950/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-evergreen-950/80 via-transparent to-transparent" />
        </div>

        <div className="container-max relative">
          <div className="max-w-2xl">
            <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
              <Leaf className="h-4 w-4 text-clay-400" /> San Antonio&apos;s trusted lawn care team
            </span>
            <h1 className="mt-7 animate-fade-up text-5xl font-bold leading-[1.02] text-white text-balance [animation-delay:80ms] md:text-7xl">
              A beautiful lawn, <span className="text-clay-400">handled.</span>
            </h1>
            <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-evergreen-50/85 [animation-delay:160ms] md:text-xl">
              Mowing, trimming, cleanups and full landscape design for homes and businesses across {site.address.city}. Reliable crews, fair prices and a yard you will be proud of.
            </p>
            <div className="mt-9 flex animate-fade-up flex-wrap gap-4 [animation-delay:240ms]">
              <Link to="/quote" className="btn-primary">
                Get a Free Quote <ArrowRight className="h-5 w-5" />
              </Link>
              <a href={`tel:${site.phoneRaw}`} className="btn-ghost">
                <Phone className="h-5 w-5" /> {site.phone}
              </a>
            </div>
            <div className="mt-10 flex animate-fade-up items-center gap-4 [animation-delay:320ms]">
              <div className="flex -space-x-3">
                {testimonials.map((t) => (
                  <span key={t.name} className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-evergreen-950 bg-evergreen-700 font-display text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-clay-400 text-clay-400" />
                  ))}
                </div>
                <p className="mt-0.5 text-sm text-evergreen-50/80">Trusted by 500+ local homeowners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-px bg-evergreen-950">
        <div className="container-max">
          <dl className="grid grid-cols-2 border-t border-white/10 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className={`px-2 py-8 text-center md:py-10 ${i % 2 === 1 ? "border-l border-white/10" : ""} ${i === 2 ? "md:border-l" : ""} ${i > 1 ? "border-t border-white/10 md:border-t-0" : ""}`}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-4xl font-bold text-white md:text-5xl">{s.value}</dd>
                <dd className="mt-1 text-sm text-evergreen-100/70">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container-max">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="Complete care for every corner of your yard"
              text="From the weekly mow to a full redesign, one dependable team handles it all."
            />
            <Link to="/services" className="btn-outline shrink-0">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section bg-white">
        <div className="container-max grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-evergreen-100 shadow-lift">
              <Photo
                src={pageImages.home.crew}
                sizes={SIZES.half}
                alt="Lentra crew member trimming evergreens"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 flex items-center gap-4 rounded-2xl bg-white p-5 shadow-lift sm:left-auto sm:right-[-1.5rem] sm:w-72">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-clay-600 text-white">
                <BadgeCheck className="h-6 w-6" />
              </span>
              <p className="text-sm leading-snug">
                <span className="block font-display text-base font-semibold text-evergreen-950">Licensed &amp; insured</span>
                Serving San Antonio since 2012
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Why Lentra"
              title="The difference you can see from the curb"
              text="We built our name on showing up, doing it right and treating every yard like our own."
            />
            <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {reasons.map((r) => (
                <div key={r.title}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-evergreen-50 text-evergreen-700">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{r.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-sand-700">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section lawn-stripes bg-evergreen-900">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow text-clay-300 before:bg-clay-300">How it works</span>
            <h2 className="mt-4 text-3xl font-bold text-white text-balance md:text-5xl">Three simple steps to a better lawn</h2>
          </div>
          <ol className="mt-16 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <span className="font-display text-5xl font-bold text-clay-400">0{i + 1}</span>
                <h3 className="mt-6 text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-evergreen-100/75">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-max">
          <SectionHeading center eyebrow="Reviews" title="What our neighbors say" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
