import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Photo from "./Photo";
import { serviceIcons } from "./icons";
import { SIZES } from "@/config/images";
import type { Service } from "@/config/site";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon];
  return (
    <Link
      to={`/services#${service.slug}`}
      className="card group flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-evergreen-100">
        <Photo
          src={service.image}
          sizes={SIZES.serviceCard}
          alt={service.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 text-evergreen-800 shadow-soft">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-sand-700">{service.short}</p>
        <div className="mt-5 flex items-center justify-between border-t border-sand-200 pt-4">
          <span className="text-sm font-semibold text-clay-700">{service.price}</span>
          <ArrowUpRight className="h-5 w-5 text-evergreen-700 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
