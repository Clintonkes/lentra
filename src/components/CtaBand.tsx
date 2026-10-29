import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import Photo from "./Photo";
import { SIZES, pageImages } from "@/config/images";
import { site } from "@/config/site";

export default function CtaBand() {
  return (
    <section className="container-max pb-20 md:pb-28">
      <div className="relative overflow-hidden rounded-[2rem] bg-evergreen-950 px-6 py-16 text-center md:px-16 md:py-24">
        <Photo src={pageImages.home.cta} sizes={SIZES.full} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-t from-evergreen-950 via-evergreen-950/70 to-evergreen-950/30" />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold text-white text-balance md:text-5xl">
            Ready for a lawn the whole street notices?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-evergreen-50/85">
            Get a free, no obligation quote today. We reply within one business day.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link to="/quote" className="btn-primary">
              Get Your Free Quote <ArrowRight className="h-5 w-5" />
            </Link>
            <a href={`tel:${site.phoneRaw}`} className="btn-ghost">
              <Phone className="h-5 w-5" /> {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
