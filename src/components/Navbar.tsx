import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Leaf } from "lucide-react";
import { site } from "@/config/site";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`transition-all duration-400 ${
          scrolled
            ? "bg-navy-900 shadow-2xl shadow-navy-950/30"
            : "bg-navy-900/90 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl copper-gradient flex items-center justify-center shadow-lg shadow-copper-500/30 transition-transform group-hover:scale-105">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
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

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.to)
                      ? "text-copper-400"
                      : "text-navy-100 hover:text-copper-400"
                  }`}
                >
                  {link.label}
                  {isActive(link.to) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 copper-gradient rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${site.phoneRaw}`}
                className="flex items-center gap-2 text-navy-100 hover:text-copper-400 font-medium text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                {site.phone}
              </a>
              <Link
                to="/quote"
                className="copper-gradient hover:opacity-90 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 shadow-lg shadow-copper-500/20"
              >
                Free Quote
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-navy-950 border-t border-navy-800">
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive(link.to)
                      ? "text-copper-400 bg-copper-500/10"
                      : "text-navy-100 hover:bg-navy-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/quote"
                className="mt-2 copper-gradient text-white font-semibold px-6 py-3 rounded-lg text-center text-sm"
              >
                Get a Free Quote
              </Link>
              <a
                href={`tel:${site.phoneRaw}`}
                className="flex items-center justify-center gap-2 mt-2 text-navy-100 font-medium text-sm"
              >
                <Phone className="w-4 h-4" /> {site.phone}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
