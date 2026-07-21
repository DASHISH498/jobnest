import { Link, useNavigate, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import { jobs } from "../data/jobs";

export default function ApplyJobPage() {
  const { id } = useParams();

  const navigate = useNavigate();

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    navigate("/application-success");
  }

  return (
    <section className="bg-zinc-950 py-16 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          to={`/jobs/${job.id}`}
          className="mb-8 inline-flex items-center gap-2 text-zinc-400 hover:text-cyan-400"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
          <h1 className="text-4xl font-bold">
            Apply for {job.title}
          </h1>

          <p className="mt-3 text-zinc-400">
            {job.company}
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 grid gap-6 md:grid-cols-2"
          >
            <input
              required
              placeholder="First Name"
              className="rounded-xl border border-zinc-700 bg-zinc-950 p-4 outline-none focus:border-cyan-500"
            />

            <input
              required
              placeholder="Last Name"
              className="rounded-xl border border-zinc-700 bg-zinc-950 p-4 outline-none focus:border-cyan-500"
            />

            <input
              required
              type="email"
              placeholder="Email"
              className="rounded-xl border border-zinc-700 bg-zinc-950 p-4 outline-none focus:border-cyan-500"
            />

            <input
              required
              placeholder="Phone"
              className="rounded-xl border border-zinc-700 bg-zinc-950 p-4 outline-none focus:border-cyan-500"
            />

            <input
              placeholder="Current Company"
              className="rounded-xl border border-zinc-700 bg-zinc-950 p-4 outline-none focus:border-cyan-500"
            />

            <input
              placeholder="Experience"
              className="rounded-xl border border-zinc-700 bg-zinc-950 p-4 outline-none focus:border-cyan-500"
            />

            <input
              placeholder="Current CTC"
              className="rounded-xl border border-zinc-700 bg-zinc-950 p-4 outline-none focus:border-cyan-500"
            />

            <input
              placeholder="Expected CTC"
              className="rounded-xl border border-zinc-700 bg-zinc-950 p-4 outline-none focus:border-cyan-500"
            />

            <input
              placeholder="LinkedIn Profile"
              className="md:col-span-2 rounded-xl border border-zinc-700 bg-zinc-950 p-4 outline-none focus:border-cyan-500"
            />

            <input
              placeholder="Portfolio Website"
              className="md:col-span-2 rounded-xl border border-zinc-700 bg-zinc-950 p-4 outline-none focus:border-cyan-500"
            />

            <textarea
              rows={6}
              placeholder="Cover Letter"
              className="md:col-span-2 rounded-xl border border-zinc-700 bg-zinc-950 p-4 outline-none focus:border-cyan-500"
            />

            <input
              type="file"
              className="md:col-span-2 rounded-xl border border-zinc-700 bg-zinc-950 p-4"
            />

            <label className="md:col-span-2 flex items-center gap-3 text-sm text-zinc-400">
              <input type="checkbox" required />
              I confirm that all the information provided is correct.
            </label>

            <button
              type="submit"
              className="md:col-span-2 rounded-xl bg-cyan-500 py-4 text-lg font-semibold text-black transition hover:bg-cyan-400"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}