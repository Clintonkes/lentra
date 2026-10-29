import { Link } from "react-router-dom";
import { ArrowRight, Check, Eye, Heart, Leaf, MapPin, ShieldCheck, Target, Users } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { SIZES, pageImages } from "@/config/images";
import { mapsEmbedUrl, site } from "@/config/site";

const values = [
  { icon: Heart, title: "Pride in the work", text: "We treat every lawn as if it were our own, taking care with every cut, trim and edge." },
  { icon: ShieldCheck, title: "Reliability", text: "Consistent, dependable service. We show up on time, every time." },
  { icon: Leaf, title: "Care for the land", text: "Sustainable practices that protect local soil and water while keeping your lawn healthy." },
  { icon: Users, title: "Customer first", text: "We listen, adapt and deliver results you will love. Your satisfaction drives everything." },
];

const milestones = [
  { year: "2012", text: "Lentra LLC is founded in San Antonio with one mower and a big dream." },
  { year: "2015", text: "We expand to commercial properties and hire our first full time crew." },
  { year: "2018", text: "Landscape design joins the lineup and we pass 300 regular clients." },
  { year: "2021", text: "We invest in commercial grade equipment and earth friendly practices." },
  { year: "2024", text: "More than 500 properties across greater San Antonio trust us with their yards." },
];

const badges = ["Licensed and insured", "Locally owned", "Free estimates", "Satisfaction guaranteed"];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Rooted in San Antonio since 2012"
        subtitle="A family owned lawn care company built on hard work, honesty and a love for beautiful yards."
        image={pageImages.about.hero}
      />

      <section className="section">
        <div className="container-max grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-evergreen-100 shadow-lift">
              <Photo src={pageImages.about.story} sizes={SIZES.half} alt="Lentra crew mowing a client's lawn" className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-clay-600 p-6 text-white shadow-lift md:block">
              <p className="font-display text-4xl font-bold">12+</p>
              <p className="text-sm text-clay-50">Years serving San Antonio</p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Our story" title="From one mower to the city's go to lawn team" />
            <div className="mt-6 space-y-4 leading-relaxed text-sand-700">
              <p>
                Lentra LLC started with a simple goal: give San Antonio homeowners reliable, high quality lawn care at a fair price. What began as a one person operation has grown into a trusted team caring for hundreds of properties.
              </p>
              <p>
                We never lost sight of what matters most. Every crew member is trained, insured and held to the standard that built our reputation: show up on time, do the job well and leave the property looking its best.
              </p>
              <p>
                Today we offer everything from weekly mowing to complete landscape design, but our philosophy has not changed. We answer the phone, keep our promises and treat your yard like our own.
              </p>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-4">
              {badges.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm font-medium text-evergreen-950">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-evergreen-50 text-evergreen-700">
                    <Check className="h-4 w-4" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-max grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-evergreen-900 p-10 text-white">
            <Target className="h-10 w-10 text-clay-400" />
            <h3 className="mt-6 text-2xl font-bold text-white">Our mission</h3>
            <p className="mt-3 leading-relaxed text-evergreen-100/80">
              To give San Antonio homeowners and businesses exceptional lawn care that adds beauty and value to their property, delivered reliably, affordably and responsibly.
            </p>
          </div>
          <div className="rounded-[2rem] bg-clay-50 p-10">
            <Eye className="h-10 w-10 text-clay-600" />
            <h3 className="mt-6 text-2xl font-bold">Our vision</h3>
            <p className="mt-3 leading-relaxed text-sand-700">
              To be the most trusted lawn care company in San Antonio, known as much for the integrity of our team and the relationships we build as for the quality of our work.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-max">
          <SectionHeading center eyebrow="What drives us" title="Our core values" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="card p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-evergreen-50 text-evergreen-700">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-700">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-max grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="Our journey" title="Milestones through the years" />
          <ol className="relative border-l-2 border-evergreen-100 pl-8">
            {milestones.map((m) => (
              <li key={m.year} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-white bg-clay-500 ring-2 ring-clay-200" />
                <p className="font-display text-xl font-bold text-clay-600">{m.year}</p>
                <p className="mt-1 leading-relaxed text-sand-700">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container-max grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Service area"
              title="Proudly serving greater San Antonio"
              text="Based in San Antonio, we care for homes and businesses across the city and its neighboring communities. Not sure we cover your street? Just ask."
            />
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {site.serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-2 text-sand-800">
                  <MapPin className="h-4 w-4 shrink-0 text-clay-500" /> {area}
                </li>
              ))}
            </ul>
            <Link to="/quote" className="btn-dark mt-10">
              Check your area <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-sand-200 shadow-lift">
            <iframe
              title="Lentra LLC location map"
              src={mapsEmbedUrl}
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
