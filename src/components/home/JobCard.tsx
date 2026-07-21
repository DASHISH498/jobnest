import {
  ArrowRight,
  Bookmark,
  BriefcaseBusiness,
  Clock3,
  IndianRupee,
  MapPin,
  Star,
} from "lucide-react";
import { Link } from "react-router";
import type { Job } from "../../types/job";

type JobCardProps = {
  job: Job;
};

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="group rounded-3xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]">
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500 text-lg font-bold text-black">
            {job.company.charAt(0)}
          </div>

          <div>
            <h3 className="font-semibold">{job.company}</h3>

            <div className="mt-2 inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400">
              {job.type}
            </div>
          </div>
        </div>

        <button className="rounded-xl border border-zinc-700 p-2 transition hover:border-cyan-500">
          <Bookmark size={18} />
        </button>
      </div>

      <h2 className="mt-6 text-2xl font-bold transition group-hover:text-cyan-400">
        {job.title}
      </h2>

      <div className="mt-4 flex items-center gap-2">
        <Star size={16} className="fill-yellow-400 text-yellow-400" />
        <span className="text-sm font-medium">4.8</span>
        <span className="text-sm text-zinc-500">Company Rating</span>
      </div>

      <div className="mt-6 space-y-4 text-sm text-zinc-400">
        <div className="flex items-center gap-3">
          <MapPin size={16} />
          <span>{job.location}</span>
        </div>

        <div className="flex items-center gap-3">
          <IndianRupee size={16} />
          <span>{job.salary}</span>
        </div>

        <div className="flex items-center gap-3">
          <BriefcaseBusiness size={16} />
          <span>{job.experience}</span>
        </div>

        <div className="flex items-center gap-3">
          <Clock3 size={16} />
          <span>{job.posted}</span>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400">
          {job.type}
        </span>

        <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs">
          React
        </span>

        <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs">
          TypeScript
        </span>
      </div>

      <div className="mt-8 flex gap-3">
        <Link
          to={`/jobs/${job.id}`}
          className="flex-1 rounded-xl border border-zinc-700 py-3 text-center transition hover:border-cyan-500"
        >
          View Details
        </Link>

        <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-semibold text-black transition hover:bg-cyan-400">
          Apply
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}