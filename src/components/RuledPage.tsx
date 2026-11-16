import type { ReactNode } from "react";

/**
 * The layout for FYStay's plain information pages (services, safety,
 * cancellation policies, contact): the title and a short introduction on the
 * left, the substance on the right as a ruled list. It reads like a printed
 * page rather than a grid of cards, and shares its grid with /host and
 * /about so the site feels like one hand made it.
 */
export function RuledPage({
  title,
  intro,
  aside,
  children,
}: {
  title: string;
  intro?: ReactNode;
  /** Quieter text under the introduction on the left (a note, a contact address). */
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-6 py-12 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <h1 className="text-4xl leading-[1.05] text-foreground sm:text-5xl">{title}</h1>
          {intro && <div className="mt-5 text-lg leading-relaxed text-stone-700">{intro}</div>}
          {aside && <div className="mt-6 text-stone-600">{aside}</div>}
        </div>
        <div className="lg:col-span-8">{children}</div>
      </div>
    </div>
  );
}

/** A ruled definition list: a serif label on the left, plain text on the right. */
export function RuledRows({ rows }: { rows: { label: string; body: ReactNode }[] }) {
  return (
    <dl className="divide-y divide-border-subtle border-y border-border-subtle">
      {rows.map(({ label, body }) => (
        <div key={label} className="grid gap-2 py-6 sm:grid-cols-3 sm:gap-8">
          <dt className="font-serif text-xl text-brand-800">{label}</dt>
          <dd className="leading-relaxed text-stone-700 sm:col-span-2">{body}</dd>
        </div>
      ))}
    </dl>
  );
}
