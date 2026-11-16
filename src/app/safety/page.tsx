import { RuledPage, RuledRows } from "@/components/RuledPage";
import { SUPPORT_EMAIL, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Safety information",
  description: "How FYStay keeps bookings, payments and stays safe for guests and hosts.",
  path: "/safety",
});

const POINTS = [
  {
    title: "Pay through FYStay, not directly",
    description:
      "Always book and pay through FYStay's checkout. It's the only way your booking is protected by a host's cancellation policy and by our support team - never send money to a host directly.",
  },
  {
    title: "Physical safety at the property",
    description:
      "Hosts are required to meet UK safety standards for their property - working smoke alarms, a carbon monoxide alarm where relevant, a valid gas safety certificate, and fire-safe furniture. If you arrive somewhere that doesn't have working smoke alarms, or anything else feels unsafe, contact us immediately and don't hesitate to also contact the relevant emergency services if there's immediate danger.",
  },
  {
    title: "Genuine, verified reviews",
    description:
      "Only guests who've completed a paid stay can leave a review, so you're reading real feedback from real stays, not sign-up spam.",
  },
  {
    title: "Report a problem",
    description:
      "You can report a review that looks abusive, fraudulent, or fake directly from the listing page. Our team reviews every report.",
  },
  {
    title: "Secure account & payments",
    description:
      "Passwords are stored securely (never in plain text), and payments are handled entirely by Stripe's encrypted checkout - FYStay never sees your full card details.",
  },
];

export default function SafetyPage() {
  return (
    <RuledPage
      title="Safety information"
      intro="How we help keep bookings, payments, and your account safe."
      aside={
        <p>
          If something feels wrong about a listing, a booking, or a message from another user, contact us
          straight away at{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-medium text-brand-700 underline underline-offset-4 hover:text-brand-800"
          >
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      }
    >
      <RuledRows rows={POINTS.map(({ title, description }) => ({ label: title, body: description }))} />
    </RuledPage>
  );
}
