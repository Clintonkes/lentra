interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
}

export default function SectionHeading({ eyebrow, title, text, center = false }: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-bold text-balance md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-relaxed text-sand-700 text-pretty">{text}</p>}
    </div>
  );
}
