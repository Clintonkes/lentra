import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { serviceIcons } from "@/components/icons";
import { SIZES, pageImages } from "@/config/images";
import { services } from "@/config/site";

const steps = [
  { title: "Reach out", text: "Call us or fill out the quote form online." },
  { title: "Free estimate", text: "We assess your property and send a custom quote." },
  { title: "Schedule", text: "Pick a time that works and we add you to the route." },
  { title: "Relax", text: "We handle the rest while your lawn stays beautiful." },
];

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything your yard needs, from one team"
        subtitle="Lawn care and landscaping tailored to South Texas grass, soil and seasons, so your property looks its best all year."
        image={pageImages.services.hero}
      />

      <section className="section">
        <div className="container-max space-y-24 md:space-y-32">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            const flip = index % 2 === 1;
            return (
              <article key={service.slug} id={service.slug} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <div className={`relative ${flip ? "lg:order-2" : ""}`}>
                  <div className="overflow-hidden rounded-[2rem] bg-evergreen-100 shadow-lift">
                    <Photo src={service.image} sizes={SIZES.half} alt={service.title} className="aspect-[4/3] w-full object-cover" />
                  </div>
                  <span className="absolute -top-4 left-6 rounded-full bg-clay-600 px-4 py-1.5 font-display text-sm font-semibold text-white shadow-lift">
                    0{index + 1}
                  </span>
                </div>
                <div>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-evergreen-900 text-white">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h2 className="mt-6 text-3xl font-bold md:text-4xl">{service.title}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-sand-700">{service.description}</p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sand-800">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-evergreen-50 text-evergreen-700">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-9 flex flex-wrap items-center gap-6">
                    <Link to={`/quote?service=${service.slug}`} className="btn-primary">
                      Request this service <ArrowRight className="h-4 w-4" />
                    </Link>
                    <span className="font-display text-lg font-semibold text-clay-700">{service.price}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-max">
          <SectionHeading center eyebrow="Getting started" title="Simple process, outstanding results" />
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="card p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-clay-600 font-display font-bold text-white">{i + 1}</span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-sand-700">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 text-center text-sand-700">
            Have a question first?{" "}
            <Link to="/faq" className="font-semibold text-evergreen-800 underline decoration-clay-400 underline-offset-4 hover:text-clay-700">
              Read our FAQ
            </Link>
          </p>
        </div>
      </section>

      <div className="pt-20 md:pt-28">
        <CtaBand />
      </div>
    </>
  );
}
