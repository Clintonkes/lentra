import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Photo from "./Photo";
import { SIZES } from "@/config/images";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}

export default function PageHeader({ eyebrow, title, subtitle, image }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-evergreen-950 pt-20">
      <div className="absolute inset-0">
        <Photo src={image} sizes={SIZES.full} alt="" priority className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-evergreen-950 via-evergreen-950/85 to-evergreen-950/40" />
      </div>
      <div className="container-max relative py-20 md:py-28">
        <nav className="mb-6 flex items-center gap-2 text-sm text-evergreen-100/80" aria-label="Breadcrumb">
          <Link to="/" className="transition hover:text-white">Home</Link>
          <ChevronRight className="h-4 w-4 text-clay-400" />
          <span className="font-medium text-white">{eyebrow}</span>
        </nav>
        <h1 className="max-w-3xl animate-fade-up text-4xl font-bold text-white text-balance md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl animate-fade-up text-lg leading-relaxed text-evergreen-50/85 [animation-delay:120ms]">{subtitle}</p>
      </div>
    </section>
  );
}
