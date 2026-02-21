import Breadcrumbs, { BreadcrumbItem } from "./Breadcrumbs";
import BackgroundPsi from "./BackgroundPsi";

type PageHeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
  breadcrumbs?: BreadcrumbItem[];
  backgroundElement?: "logo" | "psi";
};

export default function PageHero({
  title,
  description,
  eyebrow,
  breadcrumbs,
  backgroundElement = "logo",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b-2 border-accent/50 bg-primary-500 py-5 text-white md:py-8 lg:py-10">
      {backgroundElement === "logo" ? (
        <div className="absolute right-0 top-1/2 z-0 h-[560px] w-[560px] -translate-y-1/2 opacity-[0.06]" aria-hidden>
          <img src="/logo-verde.svg" alt="" className="h-full w-full object-contain" />
        </div>
      ) : (
        <div className="absolute right-0 top-1/2 z-0 -translate-y-1/2" aria-hidden>
          <BackgroundPsi size={560} variant="light" />
        </div>
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumbs && (
          <Breadcrumbs items={breadcrumbs} variant="light" />
        )}
        {eyebrow && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            {eyebrow}
          </p>
        )}
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="text-lg text-primary-100 md:max-w-3xl">{description}</p>
      </div>
    </section>
  );
}
