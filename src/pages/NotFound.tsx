import { Link } from "react-router-dom";
import { ArrowRight, Home } from "lucide-react";
import { LogoMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="lawn-stripes flex min-h-[80vh] items-center bg-evergreen-950 pt-20">
      <div className="container-max py-24 text-center">
        <LogoMark className="mx-auto h-16 w-16" />
        <p className="mt-8 font-display text-7xl font-bold text-clay-400 md:text-8xl">404</p>
        <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">This patch of lawn does not exist</h1>
        <p className="mx-auto mt-4 max-w-md text-evergreen-100/80">The page you are looking for has moved or never existed. Let us get you back on the path.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-primary">
            <Home className="h-4 w-4" /> Back home
          </Link>
          <Link to="/quote" className="btn-ghost">
            Get a free quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
