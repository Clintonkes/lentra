import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Leaf } from "lucide-react";
import { site } from "@/config/site";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/quote", label: "Get a Quote" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand — wider column */}
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl copper-gradient flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-lg tracking-tight">
                  Petraslynn
                </span>
                <span className="text-copper-400 text-[10px] font-semibold tracking-[0.2em] uppercase">
                  Lawn Care
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs text-navy-300">
              Professional lawn care and landscape management serving Aurora and
              the greater Denver metro area. Reliable service, exceptional
              results — every visit.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-navy-800 hover:bg-copper-600 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-navy-800 hover:bg-copper-600 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-copper-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-copper-400 flex-shrink-0 mt-0.5" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-copper-400 flex-shrink-0" />
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="hover:text-copper-400 transition-colors"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-copper-400 flex-shrink-0" />
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-copper-400 transition-colors break-all"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="md:col-span-3">
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Business Hours
            </h3>
            <ul className="space-y-2.5 text-sm">
              {site.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between gap-2"
                >
                  <span className="flex items-center gap-2 text-navy-300">
                    <Clock className="w-3.5 h-3.5 text-copper-400/50" />
                    {h.day}
                  </span>
                  <span
                    className={
                      h.time === "Closed"
                        ? "text-red-400 text-xs"
                        : "text-navy-300 text-xs"
                    }
                  >
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-navy-400">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Licensed &amp; Insured | Serving the Denver Metro Area</p>
        </div>
      </div>
    </footer>
  );
}
