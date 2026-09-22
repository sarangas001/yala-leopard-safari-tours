import Link from "next/link";
import Reveal from "@/components/Reveal";

const SECTIONS: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Main Pages",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/safaris", label: "Safaris" },
      { href: "/gallery", label: "Gallery" },
      { href: "/reviews", label: "Reviews" },
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
      { href: "/taxi-car-rental", label: "Taxi & Car Rental" },
      { href: "/hambantota-port-to-yala", label: "Hambantota Port to Yala" },
    ],
  },
  {
    heading: "Safari Parks",
    links: [
      { href: "/safaris/yala", label: "Yala National Park" },
      { href: "/safaris/udawalawe", label: "Udawalawe National Park" },
      { href: "/safaris/bundala", label: "Bundala National Park" },
      { href: "/safaris/kumana", label: "Kumana National Park" },
      { href: "/safaris/lunugamvehera", label: "Lunugamvehera National Park" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/legal/privacy-policy", label: "Privacy Policy" },
      { href: "/legal/cookie-policy", label: "Cookie Policy" },
      { href: "/legal/terms-and-conditions", label: "Terms & Conditions" },
      { href: "/legal/refund-cancellation-policy", label: "Refund & Cancellation Policy" },
    ],
  },
];

export default function SitemapLinks() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
          {SECTIONS.map((section, i) => (
            <Reveal key={section.heading} delay={i * 0.1} className="text-center sm:text-left">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-ink">
                {section.heading}
              </h2>
              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base text-brand-ink-muted transition-colors hover:text-forest"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
