import { Link } from "react-router-dom";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { fullAddress, mapsUrl, services, site } from "@/config/site";

const pages = [
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/quote", label: "Get a Quote" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="lawn-stripes bg-evergreen-950 text-evergreen-100/80">
      <div className="container-max pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="group inline-block" aria-label="Lentra LLC home">
              <Logo />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              Professional lawn care and landscaping for homes and businesses across San Antonio. Licensed, insured and proudly local.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={site.social.facebook} aria-label="Facebook" className="rounded-full border border-white/10 p-2.5 transition hover:border-clay-400 hover:text-clay-300">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={site.social.instagram} aria-label="Instagram" className="rounded-full border border-white/10 p-2.5 transition hover:border-clay-400 hover:text-clay-300">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white">Company</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {pages.map((p) => (
                <li key={p.to}>
                  <Link to={p.to} className="transition hover:text-clay-300">{p.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white">Services</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services#${s.slug}`} className="transition hover:text-clay-300">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white">Get in Touch</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 transition hover:text-clay-300">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-clay-400" /> {fullAddress}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneRaw}`} className="flex gap-3 transition hover:text-clay-300">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-clay-400" /> {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex gap-3 transition hover:text-clay-300">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-clay-400" /> {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-clay-400" />
                <span>Mon to Fri: 7 AM to 6 PM<br />Sat: 8 AM to 4 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-evergreen-100/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Licensed and insured in {site.address.city}, Texas.</p>
        </div>
      </div>
    </footer>
  );
}
