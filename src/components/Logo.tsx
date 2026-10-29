interface LogoMarkProps {
  className?: string;
}

/**
 * An "L" with a leaf sprouting from it, standing on mowed lawn stripes.
 * Same artwork as public/lentra-icon.svg.
 */
export function LogoMark({ className = "w-10 h-10" }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="#123a32" />
      <path d="M12 51h40M16 56.5h32" stroke="#1e5247" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M22 13v31h22" fill="none" stroke="#f4efe6" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27.5 30.5C28 20.5 35 14 46.5 13c.2 10.5-6.5 17.4-19 17.5z" fill="#e6814f" />
      <path d="M28.5 29.5L40 19.5" stroke="#123a32" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

interface LogoProps {
  /** "light" for dark backgrounds (navbar, footer), "dark" for light ones. */
  tone?: "light" | "dark";
}

export default function Logo({ tone = "light" }: LogoProps) {
  const name = tone === "light" ? "text-white" : "text-evergreen-950";
  const sub = tone === "light" ? "text-evergreen-200" : "text-evergreen-700";
  return (
    <span className="flex items-center gap-3" aria-label="Lentra LLC, Lawn and Landscape">
      <LogoMark className="w-10 h-10 md:w-11 md:h-11 shrink-0 transition-transform duration-300 group-hover:rotate-[-4deg]" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.45rem] font-bold tracking-tight ${name}`}>
          Lentra<span className="ml-1 text-[0.7em] font-semibold text-clay-400">LLC</span>
        </span>
        <span className={`mt-1 text-[9.5px] font-semibold uppercase tracking-[0.3em] ${sub}`}>
          Lawn &amp; Landscape
        </span>
      </span>
    </span>
  );
}
