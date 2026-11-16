import Link from "next/link";
import { RuledPage, RuledRows } from "@/components/RuledPage";
import { pageMetadata, SUPPORT_EMAIL } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact us",
  description: "How to reach FYStay for booking questions, safety concerns, or hosting support.",
  path: "/contact",
});

const REASONS = [
  {
    title: "Booking or account questions",
    description: "Anything about searching, booking, payments, or your account.",
  },
  {
    title: "Report a safety concern",
    description:
      "A listing, review, or message that doesn't seem right - see our Safety information page for more on how reports are handled.",
  },
  {
    title: "Hosting support",
    description: "Questions about listing a property, payouts, or your host dashboard.",
  },
];

export default function ContactPage() {
  return (
    <RuledPage
      title="Contact us"
      intro="FYStay is a small, local team - every message reaches a real person, not a queue."
    >
      <RuledRows rows={REASONS.map(({ title, description }) => ({ label: title, body: description }))} />

      <div className="mt-10">
        <p className="text-stone-700">
          Signed in? Open a support ticket and we&apos;ll reply on this site, or email us directly.
        </p>
        <Link
          href="/help/tickets/new"
          className="focus-ring mt-3 inline-block rounded font-serif text-3xl text-brand-800 underline decoration-brand-300 underline-offset-[6px] hover:decoration-brand-700"
        >
          Open a support ticket
        </Link>
        <p className="mt-4">
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-medium text-brand-700 underline underline-offset-4 hover:text-brand-800"
          >
            {SUPPORT_EMAIL}
          </a>
        </p>
        <p className="mt-8 text-stone-600">
          For common questions you can also check the{" "}
          <Link href="/help" className="text-brand-700 underline underline-offset-4 hover:text-brand-800">
            Help centre
          </Link>{" "}
          or{" "}
          <Link href="/safety" className="text-brand-700 underline underline-offset-4 hover:text-brand-800">
            Safety information
          </Link>
          .
        </p>
      </div>
    </RuledPage>
  );
}
