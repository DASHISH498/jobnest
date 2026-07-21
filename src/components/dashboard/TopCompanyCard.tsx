import { MapPin, BriefcaseBusiness } from "lucide-react";
import Card from "../ui/Card";

interface TopCompanyCardProps {
  company: string;
  openings: string;
  location: string;
}

export default function TopCompanyCard({
  company,
  openings,
  location,
}: TopCompanyCardProps) {
  return (
    <Card className="group border border-zinc-800 bg-zinc-900/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500">
      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10">
          <BriefcaseBusiness
            className="text-cyan-400"
            size={26}
          />
        </div>

        <div className="flex-1">

          <h3 className="text-lg font-semibold text-white">
            {company}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-sm text-zinc-400">

            <MapPin size={15} />

            {location}

          </div>

        </div>

      </div>

      <div className="mt-5 flex items-center justify-between">

        <span className="text-zinc-500">
          Open Positions
        </span>

        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-400">
          {openings}
        </span>

      </div>
    </Card>
  );
}