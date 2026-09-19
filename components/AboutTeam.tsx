import Reveal from "@/components/Reveal";
import TeamMemberProfile, { type TeamMember } from "@/components/TeamMemberProfile";

const TEAM: TeamMember[] = [
  {
    name: "Kumara",
    role: "Head Safari Guide & Driver",
    experience: "36+ Years of Experience",
    bio: "An experienced local safari driver and guide with extensive knowledge of Yala National Park, wildlife routes and animal behavior.",
  },
  {
    name: "Akila",
    role: "Professional Wildlife Tour Guide",
    experience: "30+ Years of Experience",
    bio: "Akila brings deep, specialised knowledge of leopard tracking behaviour, elephant migration, avian identification and local ecosystem conservation. Having guided thousands of travellers from around the world, Akila delivers an exceptionally safe, educational and elite safari experience.",
  },
];

export default function AboutTeam() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Meet the Team
          </h2>
        </Reveal>

        <div className="mt-14 space-y-16 lg:mt-16 lg:space-y-24">
          {TEAM.map((member, i) => (
            <TeamMemberProfile key={member.name} member={member} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
