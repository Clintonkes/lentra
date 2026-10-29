import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { site } from "@/config/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-evergreen-950/95 shadow-lg shadow-evergreen-950/20 backdrop-blur-md" : "bg-gradient-to-b from-evergreen-950/70 to-transparent"
      }`}
    >
      <nav className="container-max flex h-20 items-center justify-between gap-6" aria-label="Main">
        <Link to="/" className="group" aria-label="Lentra LLC home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-evergreen-100/80 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-clay-400 transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={`tel:${site.phoneRaw}`} className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white">
            <Phone className="h-4 w-4 text-clay-400" />
            {site.phone}
          </a>
          <Link to="/quote" className="btn-primary py-2.5 px-5 text-sm">
            Free Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="rounded-full p-2 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div className={`overflow-hidden transition-[max-height] duration-300 lg:hidden ${open ? "max-h-[calc(100vh-5rem)]" : "max-h-0"}`}>
        <ul className="container-max flex flex-col gap-1 pb-6 pt-2">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `block rounded-2xl px-4 py-3 font-display text-lg font-medium ${
                    isActive ? "bg-white/10 text-white" : "text-evergreen-100 hover:bg-white/5"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="mt-3 grid gap-3 sm:grid-cols-2">
            <Link to="/quote" className="btn-primary">
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${site.phoneRaw}`} className="btn-ghost">
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
