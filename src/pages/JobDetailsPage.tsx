import { Link, useParams } from "react-router";
import {
  ArrowLeft,
  BriefcaseBusiness,
  Clock3,
  IndianRupee,
  MapPin,
} from "lucide-react";

import { jobs } from "../data/jobs";

export default function JobDetailsPage() {
  const { id } = useParams();

  const job = jobs.find((item) => item.id === Number(id));

  if (!job) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
        <h1 className="text-3xl font-bold">
          Job Not Found
        </h1>
      </section>
    );
  }

  return (
    <section className="bg-zinc-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <Link
          to="/jobs"
          className="mb-10 inline-flex items-center gap-2 text-zinc-400 transition hover:text-cyan-400"
        >
          <ArrowLeft size={18} />
          Back to Jobs
        </Link>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-500 text-3xl font-bold text-black">
                {job.company.charAt(0)}
              </div>

              <div>
                <p className="text-cyan-400">{job.company}</p>

                <h1 className="mt-2 text-4xl font-bold">
                  {job.title}
                </h1>

                <div className="mt-5 flex flex-wrap gap-6 text-zinc-400">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    {job.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <IndianRupee size={18} />
                    {job.salary}
                  </div>

                  <div className="flex items-center gap-2">
                    <BriefcaseBusiness size={18} />
                    {job.experience}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 size={18} />
                    {job.posted}
                  </div>
                </div>
              </div>
            </div>

            <Link
              to={`/jobs/${job.id}/apply`}
              className="rounded-2xl bg-cyan-500 px-8 py-4 text-center font-semibold text-black transition hover:bg-cyan-400"
            >
              Apply Now
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
              <h2 className="mb-5 text-2xl font-bold">
                Job Description
              </h2>

              <p className="leading-8 text-zinc-300">
                {job.description}
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
              <h2 className="mb-5 text-2xl font-bold">
                Requirements
              </h2>

              <ul className="space-y-3">
                {job.requirements.map((item) => (
                  <li key={item}>✅ {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
              <h2 className="mb-5 text-2xl font-bold">
                Responsibilities
              </h2>

              <ul className="space-y-3">
                {job.responsibilities.map((item) => (
                  <li key={item}>✔ {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
              <h2 className="mb-5 text-2xl font-bold">
                About Company
              </h2>

              <p className="leading-8 text-zinc-300">
                {job.aboutCompany}
              </p>
            </div>

            <Link
              to={`/jobs/${job.id}/apply`}
              className="block w-full rounded-2xl bg-cyan-500 py-4 text-center text-lg font-semibold text-black transition hover:bg-cyan-400"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}