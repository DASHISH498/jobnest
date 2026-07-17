import type { LucideIcon } from "lucide-react";

type CategoryCardProps = {
  name: string;
  jobs: number;
  icon: LucideIcon;
};

export default function CategoryCard({
  name,
  jobs,
  icon: Icon,
}: CategoryCardProps) {
  return (
    <div className="group cursor-pointer rounded-3xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500">
      <div className="mb-6 inline-flex rounded-2xl bg-cyan-500/10 p-4 text-cyan-400">
        <Icon size={32} />
      </div>

      <h3 className="text-xl font-semibold transition group-hover:text-cyan-400">
        {name}
      </h3>

      <p className="mt-2 text-zinc-400">
        {jobs}+ Jobs Available
      </p>
    </div>
  );
}