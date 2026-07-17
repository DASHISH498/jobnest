import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Verified Companies",
    description:
      "Apply only to trusted and verified companies hiring actively.",
    icon: Building2,
  },
  {
    id: 2,
    title: "Thousands of Jobs",
    description:
      "Discover opportunities from startups to top MNCs in one place.",
    icon: BriefcaseBusiness,
  },
  {
    id: 3,
    title: "Easy Apply",
    description:
      "Apply for jobs in just a few clicks without lengthy forms.",
    icon: BadgeCheck,
  },
  {
    id: 4,
    title: "Secure Platform",
    description:
      "Your profile and personal information are always protected.",
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">
            Why Choose JobNest?
          </h2>

          <p className="mt-4 text-zinc-400">
            Everything you need to find your next dream job.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="group rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-cyan-500/10 p-4 text-cyan-400">
                  <Icon size={32} />
                </div>

                <h3 className="text-xl font-semibold transition group-hover:text-cyan-400">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}