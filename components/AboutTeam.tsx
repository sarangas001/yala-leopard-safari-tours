import Reveal from "@/components/Reveal";
import TeamMemberProfile, { type TeamMember } from "@/components/TeamMemberProfile";

const TEAM: TeamMember[] = [
  {
    name: "Kumara",
    role: "Head Safari Driver",
    experience: "36+ Years of Experience",
    bio: "An experienced local safari driver with extensive knowledge of Yala National Park, wildlife routes and animal behavior.",
    photo: "/images/team/Kumara.png"
  },
  {
    name: "Akila",
    role: "Professional Wildlife Driver",
    bio: "Akila brings deep, specialised knowledge of leopard tracking behaviour, elephant migration, avian identification and local ecosystem conservation. Having hosted thousands of travellers from around the world, Akila delivers an exceptionally safe, educational and elite safari experience.",
    photo: "/images/team/Akila.png"
  },
];

export default function AboutTeam() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-[1.5cm] sm:px-20 sm:py-[1.5cm] lg:px-40 lg:py-[2.5cm]">
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
