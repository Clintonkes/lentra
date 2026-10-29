import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/config/site";

export default function TestimonialCard({ name, location, text, rating }: Testimonial) {
  return (
    <figure className="card flex h-full flex-col p-7">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-clay-500 text-clay-500" : "text-sand-300"}`} />
          ))}
        </div>
        <Quote className="h-7 w-7 text-evergreen-100" />
      </div>
      <blockquote className="mt-5 flex-1 leading-relaxed text-sand-800">{text}</blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-sand-200 pt-5">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-evergreen-800 font-display font-bold text-white">
          {name.charAt(0)}
        </span>
        <span>
          <span className="block font-semibold text-evergreen-950">{name}</span>
          <span className="block text-sm text-sand-600">{location}</span>
        </span>
      </figcaption>
    </figure>
  );
}
