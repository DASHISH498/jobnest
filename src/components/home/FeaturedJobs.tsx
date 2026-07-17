import { jobs } from "../../data/jobs";
import JobCard from "./JobCard";

export default function FeaturedJobs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Featured Opportunities
            </p>

            <h2 className="text-5xl font-bold">
              Latest Jobs
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-400">
              Explore the most popular job openings from leading companies
              across India and around the world.
            </p>
          </div>

          <button className="rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-cyan-500 hover:text-cyan-400">
            View All Jobs
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}