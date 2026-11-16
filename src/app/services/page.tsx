import Link from "next/link";
import { RuledPage, RuledRows } from "@/components/RuledPage";
import { pageMetadata } from "@/lib/seo";
import { FYSTAY_SERVICES } from "@/lib/services";

export const metadata = pageMetadata({
  title: "Services",
  description: "Everything FYStay offers around your stay - airport transfers, Local Guides, help and hosting - in one place.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <RuledPage title="Services" intro="Everything FYStay offers around your stay, for guests and hosts.">
      <RuledRows
        rows={FYSTAY_SERVICES.map(({ title, description, href, cta }) => ({
          label: title,
          body: (
            <>
              <p>{description}</p>
              <Link
                href={href}
                className="focus-ring mt-3 inline-block rounded font-medium text-brand-700 underline decoration-brand-300 underline-offset-[6px] hover:decoration-brand-700"
              >
                {cta}
              </Link>
            </>
          ),
        }))}
      />
    </RuledPage>
  );
}
