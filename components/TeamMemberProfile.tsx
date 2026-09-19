import Image from "next/image";
import Reveal from "@/components/Reveal";

export type TeamMember = {
  name: string;
  role: string;
  experience: string;
  bio: string;
  photo?: string;
};

export default function TeamMemberProfile({
  member,
  reverse = false,
}: {
  member: TeamMember;
  reverse?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <Reveal className={reverse ? "lg:order-2" : undefined}>
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl bg-sand shadow-2xl shadow-black/10">
          {member.photo ? (
            <Image
              src={member.photo}
              alt={member.name}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              quality={80}
              className="object-cover"
            />
          ) : (
            // Placeholder — swap for a real photo before launch
            <div className="flex h-full flex-col items-center justify-center gap-3 text-brand-ink-muted">
              <svg viewBox="0 0 24 24" fill="none" className="h-16 w-16" aria-hidden="true">
                <circle cx="12" cy="8.5" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-xs font-medium uppercase tracking-[0.14em]">
                Photo coming soon
              </span>
            </div>
          )}
        </div>
      </Reveal>

      <Reveal
        delay={0.12}
        className={"text-center sm:text-left" + (reverse ? " lg:order-1" : "")}
      >
        <h3 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl">
          {member.name}
        </h3>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-brand-orange">
          {member.role}
        </p>
        <p className="mt-1 text-sm text-brand-ink-muted">{member.experience}</p>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-brand-ink-muted sm:mx-0">
          {member.bio}
        </p>
      </Reveal>
    </div>
  );
}
